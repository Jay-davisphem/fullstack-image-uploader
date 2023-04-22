import cloud from 'cloudinary';
import dotenv from 'dotenv';
import Upload from '../../db/upload.js'

const cloudinary = cloud.v2;
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const upload = async (file, folder) => {
  cloudinary.api.delete_derived_resources()
  return await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
    folder,
  });
};
export const clearCloud = async () => {
  await Upload.deleteMany();
  await cloudinary.api.delete_all_resources();
};

export default cloudinary;