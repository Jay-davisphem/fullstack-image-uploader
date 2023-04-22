import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import Upload from '../db/upload.js';
import king, {
  upload as cloudinary,
} from '../services/lib/cloudinary.service.js';
import bcrypt from 'bcrypt';

const postUtil = async (label, imageUrl, password) => {
  if (!password)
    return new Upload({ url: imageUrl, imageID: crypto.randomUUID() });
  const hashedPass = await bcrypt.hash(password, 12);
  return new Upload({
    url: imageUrl,
    imageID: crypto.randomUUID(),
    password: hashedPass,
  });
};

const uploadImage = async (req, res, _next) => {
  try {
    if (!req.file) {
      const err = Error('No image provided');
      err.message = 'No image provided';
      throw err;
    }
    const uploader = async (path) => await cloudinary.upload(path, 'Images');
    const { path } = req.file;
    const { secure_url, asset_id } = await uploader(path);

    const upload = new Upload({
      url: secure_url,
      imageID: asset_id,
    });
    await upload.save();
    await fs.unlink(path);
    return res.status(200).json({ url: secure_url, id: asset_id });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message || err });
  }
};

const getImages = async (req, res, _next) => {
  const PER_PAGE = 20;
  try {
    let curPage = req.query.page || 1;
    const perPage = +req.query.limit || PER_PAGE;
    if (curPage < 1) curPage = 1;
    const count = await Upload.count();
    const totalPage = Math.ceil(count / perPage);
    if (totalPage && curPage > totalPage) curPage = totalPage;
    const images = await Upload.find()
      .sort({ createdAt: -1, creator: 1 })
      .skip(perPage * (curPage - 1))
      .limit(perPage);
    const url = req.get('host') + '/images/?page=';
    return res.json({
      message: 'Uploads fetched successsfully.',
      images,
      next: curPage >= totalPage ? null : `${url}${+curPage + 1}`,
      previous: curPage <= 1 ? null : `${url}${+curPage - 1}`,
    });
  } catch (err) {
    return res.status(404).json({ errorMessage: err.message });
  }
};

const postImage = async (req, res, _next) => {
  try {
    const { label, imageUrl, password } = req.body;
    const upload = await postUtil(label, imageUrl, password);
    await upload.save();
    return res.status(200).json({
      message: 'Success',
      data: { url: upload.url, imageID: upload.imageID },
    });
  } catch (err) {
    return res.status(400).json({ errorMessage: err.message });
  }
};
const deleteImage = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const upload = await Upload.findById(id);
    const { password } = req.get('Authorization');
    if (upload.password && !(await bcrypt.compare(password, upload.password))) {
      const err = new Error('Unauthorized');
      err.code = 403;
      throw err;
    } else {
      await king.uploader.destroy(upload.url);
      await upload.deleteOne();
      return res.status(200).json({ message: 'Successful deletion!' });
    }
  } catch (err) {
    return res.status(err.code || 400).json({ errorMessage: err.message });
  }
};
export default {
  uploadImage,
  getImages,
  postImage,
  deleteImage,
};
