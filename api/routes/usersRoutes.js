import express from 'express';
import * as usersController from '../controllers/usersController.js';
import { userController } from '../controllers/index.js';
import { createUserValidator } from '../middlewares/index.js';

const router = express.Router();

router.post('/', createUserValidator, usersController.default.createUser);

//Usar middleware de auth
router.route(':/id').get(userController.getUserByIdToken);

export default router;
