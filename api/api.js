import express from 'express';
import { usersRoutes, messageRoutes } from './routes/index.js';

const api = express();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use('/api/users', usersRoutes);
api.use('/api/messages', messageRoutes)


export default api;
