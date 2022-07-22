import express from 'express';
import { propertyController } from '../controllers/index.js';
import protectedRoute from '../middlewares/protectedMiddleware.js';

const router = express.Router();

router.route('/').post(propertyController.create).get(propertyController.getAll);

router
  .route('/:id')
  .get(propertyController.getById)
  .put(protectedRoute, propertyController.updateById)
  .delete(propertyController.deleteById);

export default router;
