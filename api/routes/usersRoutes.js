import express from 'express';
import { userController } from '../controllers/index.js';
import {
  createUserValidator,
  loginUserValidator,
} from '../middlewares/index.js';

const router = express.Router();

router.post('/', createUserValidator, userController.create);
router.post('/login', loginUserValidator, userController.login);

export default router;
