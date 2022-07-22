import express from 'express';
import { usersRoutes } from './routes/index.js';

const api = express();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use('/api/users', usersRoutes);

export default api;
