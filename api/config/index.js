import dotenv from 'dotenv';

dotenv.config({});

//TODO: cargar las variables de entorno faltantes

export default {
  database: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME,
  },
  token: {
    secret: process.env.TOKEN_SECRET,
<<<<<<< HEAD
  }
=======
  },
>>>>>>> c351adeba635c2993677097d5d043b612ccb8b4d
};
