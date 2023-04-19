import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';
import express from 'express';
import multer from 'multer';
import morgan from 'morgan';
import cors from 'cors';
import { fileStorage, fileFilter } from './services/lib/image.service.js';

import Connection from './services/lib/connectionSetup.js';
import uploadRoutes from './routes/upload.js';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

global.appRoot = path.resolve(__dirname);
config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse incoming json data
app.use(
  multer({
    storage: fileStorage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter,
  }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', uploadRoutes);
app.use((error, req, res, next) => {
  console.log('This is the rejected field ->', error.field, error);
});
const connection = new Connection(app, process.env.DB_URI);
connection.connect();
