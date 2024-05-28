import express from 'express';
import validateToken from '../middleware/validateToken';
import reestablecerPasswordController from '../controllers/reestablecerPasswordController';
const router = express.Router();

router.put('/', validateToken, reestablecerPasswordController);

export default router;

