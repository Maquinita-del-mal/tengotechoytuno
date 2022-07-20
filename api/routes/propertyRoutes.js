import express from 'express';
import { propertyController } from '../controllers/index.js';

const router = express.Router();

router.route('/').post(propertyController.create).get(propertyController.getAll);

router
  .route('/:id')
  .get(propertyController.getById)
  .put(propertyController.updateById)
  .delete(propertyController.deleteById);

export default router;
