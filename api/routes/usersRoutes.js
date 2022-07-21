import express from 'express';
import * as usersController from '../controllers/usersController.js';
import { userController } from '../controllers/index.js';
import { createUserValidator, loginUserValidator } from '../middlewares/index.js';

const router = express.Router();

router.post('/', createUserValidator, usersController.default.createUser);

router.post('/', createUserValidator, usersController.default.createUser)
router.post('/login', loginUserValidator, userController.login);

router
  .route(':/id')
  .get(userController.getUserByIdToken)

router.route(':/id').get(userController.getUserByIdToken);

export default router;
