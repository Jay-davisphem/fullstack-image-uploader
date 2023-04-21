import { Router } from 'express';
import uploadController from '../controllers/upload.js';

const router = Router();

router.post('/upload', uploadController.uploadImage);
router.get('/images', uploadController.getImages);
router.post('/images', uploadController.postImage);
router.delete('/images/:id', uploadController.deleteImage);

export default router;
