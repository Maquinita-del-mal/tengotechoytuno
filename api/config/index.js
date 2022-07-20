import dotenv from 'dotenv';

dotenv.config({});

console.log(process.env.DB_URI)
//TODO: cargar las variables de entorno faltantes

export default {
  database: {
    uri: 'mongodb+srv://root1:root1@cluster0.qmeg72g.mongodb.net',
    name: 'test',
  },
};
