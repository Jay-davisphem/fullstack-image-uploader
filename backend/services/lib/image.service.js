import multer from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';

export const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, appRoot + '/images');
  },
  filename: (req, file, cb) => {
    cb(null, crypto.randomUUID() + '-' + file.originalname);
  },
});

export const fileFilter = (res, file, cb) => {
  if (file?.mimetype?.startsWith('image')) cb(null, true);
  else cb({ message: 'Unsupported format' }, false);
};
