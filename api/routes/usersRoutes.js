import express from 'express';
import * as usersController from '../controllers/usersController.js';
import {createUserValidator} from '../middlewares/index.js'
const router = express.Router()
router.post('/', createUserValidator, usersController.default.createUser) 
export default router
