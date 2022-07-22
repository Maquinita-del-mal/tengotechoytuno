import express from 'express';
import { messageController } from '../controllers/index.js';
import { messageValidator } from '../middlewares/index.js';

const router = express.Router()

router.post('/properties/:id/messages', messageValidator, messageController.create)

router.delete('/properties/:id/message/:messageId', messageController.deleteMessageById)

export default router;