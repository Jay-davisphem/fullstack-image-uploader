import cloud from 'cloudinary';
import dotenv from 'dotenv';

const cloudinary = cloud.v2;
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = async (file, folder) => {
  return cloudinary.uploader.upload(file, { resource_type: 'auto', folder });
};

export default {
  upload,
};
