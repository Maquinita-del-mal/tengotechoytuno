import express from 'express';
import usersRoutes from './routes/users.routes.js';
//Acá se importan las rutas

const api = express();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

//Acá se registran las rutas
api.use('/api/users', usersRoutes);


export default api;
