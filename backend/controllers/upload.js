import fs from 'node:fs/promises';
import Upload from '../db/upload.js';
import cloudinary from '../services/lib/cloudinary.service.js';
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

export default {
  uploadImage,
};
