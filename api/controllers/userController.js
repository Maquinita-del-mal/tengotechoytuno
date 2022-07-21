import { User } from '../models/index.js';
import jwt from 'jwt-simple';
import config from '../config/index.js';

/**

  Acceder a mi información (buscar user por id sacado del token)

  Si eres admin puedes pasar un id para buscar al usuario

  NUNCA mostrar contraseña

 */

const getUserByIdToken = async (req, res) => {
  const { id } = req.params;
  //TODO: borrar linea de abajo
  User.password = undefined;
  try {
    const user = await User.findById(id);

    if (user.role === 'admin') {
      return res.json({
        msg: 'Usuario encontrado',
        user,
      });
    }

    //TODO: si no es admin, regresar el usuario que está en req.user
    //Ese usuario lo saca del token
    const payload = {
      userId: user.id,
    };

    const token = jwt.encode(payload, config.token.secret);
    return res.json({
      msg: 'Usuario encontrado',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener Usuario',
      error,
    });
  }
};

export { getUserByIdToken };
