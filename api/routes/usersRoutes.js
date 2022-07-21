import express from 'express';
import { userController } from '../controllers/index.js';
import { createUserValidator, loginUserValidator, protectedRoute } from '../middlewares/index.js';

const router = express.Router();

router.post('/', createUserValidator, userController.createUser);

router.post('/', createUserValidator, userController.createUser);
router.post('/login', loginUserValidator, userController.login);

router
  .route('/:id')
  .get(protectedRoute, userController.getUserByIdToken);

export default router;
