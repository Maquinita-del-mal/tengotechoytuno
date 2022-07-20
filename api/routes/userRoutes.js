import express from 'express'
import { userController } from '../controllers/index.js'

const router = express.Router()

router
.delete(userController.deleteUserById)


export default router