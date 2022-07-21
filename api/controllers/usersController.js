import * as bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import UserModel from '../models/User.js';
import config from '../config/index.js';

const create = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      ...req.body,
      password: hashedPassword,
    };
    const createdUser = await UserModel.create(newUser);
    res.status(201).json(createdUser);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne(req.email);
    if (!user) {
      return res.status(401).json({
        msg: 'Credenciales erróneas',
      });
    }
    const compared = await bcrypt.compare(req.password);
    if (!compared) {
      return res.status(401).json({
        msg: 'Bad credentials',
      });
    }
    user.password = undefined;
    const token = jwt.encode(user, config.token.secret);
    return res.json({
      msg: 'Login satisfactorio',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al hacer login',
    });
  }
};


const updateById = async (req, res) => {
  if (req.user.role != 'admin') {
    return res.status(402).json({
      msg: 'No auth'
    })
  }
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body);
    return res.json({
      msg: 'User actualizado',
      user,
    });
  } catch (error) {
    return returnError('Error al actualizar user');
  }
};

export { create, login, updateById };



