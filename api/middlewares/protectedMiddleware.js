import jwt from 'jwt-simple';
import config from "../config/index.js";
import { User } from "../models/index.js";

const protectedRoute = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      msg: 'Token requerido'
    });
  }
  try {
    const payload = jwt.decode(token, config.token.secret);
    const user = await User.findById(payload.userId);
    if (!user) {
      return res.status(401).json('Usuario no existente');
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token invalido',
      error,
    });
  }
};

export default protectedRoute;