import express from 'express';
//Acá se importan las rutas

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

//Acá se registran las rutas

export default api;
