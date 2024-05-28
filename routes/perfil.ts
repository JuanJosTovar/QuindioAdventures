import express from 'express';
import perfilController from '../controllers/perfilController';
import validateToken from '../middleware/validateToken';
const router = express.Router();

router.get('/', validateToken, perfilController);

export default router;

