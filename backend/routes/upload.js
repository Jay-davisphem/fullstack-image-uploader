import { Router } from 'express';
import uploadController from '../controllers/upload.js';
import { clearCloud } from '../services/lib/cloudinary.service.js';

const router = Router();

router.post('/upload', uploadController.uploadImage);
router.get('/images', uploadController.getImages);
router.post('/images', uploadController.postImage);
router.delete('/images/:id', uploadController.deleteImage);

router.delete(`/clear-${process.env.SECRET}`, async (req, res, _next) => {
  try {
    console.log(clearCloud);
    await clearCloud();
    return res.status(201).json({ errorMessage: 'Cloud cleared successfully' });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
});

export default router;
