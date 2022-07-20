import dotenv from 'dotenv';

dotenv.config({});

console.log(process.env.DB_URI)
//TODO: cargar las variables de entorno faltantes

export default {
  database: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME,
  },
};
