import { Router } from 'express';
import uploadController from '../controllers/upload.js';

const router = Router();

router.post('/upload', uploadController.uploadImage);

export default router;
