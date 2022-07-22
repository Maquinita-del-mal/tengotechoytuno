import express from 'express';
import { messageController } from '../controllers/index.js';

const router = express.Router();

router
  .route('/:id/message')
  .get(messageController.getMessageById);
  
export default router;