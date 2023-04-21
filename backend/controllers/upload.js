import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import Upload from '../db/upload.js';
import cloudinary from '../services/lib/cloudinary.service.js';
import bcrypt from 'bcrypt';

const postUtil = async (label, imageUrl, password) => {
  if (!password)
    return new Upload({ url: imageUrl, imageID: crypto.randomUUID() });
  const hashedPass = await bcrypt.hash(password, process.env.SECRET);
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
  try {
    const images = await Upload.find();
    return res.status(200).json(images);
  } catch (err) {
    return res.status(404).json({ errorMessage: err.message });
  }
};

const postImage = async (req, res, _next) => {
  try {
    const { label, imageUrl, password } = req.body;
    return await postUtil(label, imageUrl, password);
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
