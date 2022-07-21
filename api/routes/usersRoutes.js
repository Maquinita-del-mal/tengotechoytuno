import express from 'express';
import { userController } from '../controllers/index.js';
import {
    createUserValidator,
    loginUserValidator,
    authValidator,
    updateUserValidator
} from '../middlewares/index.js';

const router = express.Router();

router.post('/', createUserValidator, userController.create);
router.post('/login', loginUserValidator, userController.login);
router.put('/:id', authValidator, updateUserValidator,  userController.updateById)
router.delete('/:id', authValidator,userController.deleteUserById)

export default router;
