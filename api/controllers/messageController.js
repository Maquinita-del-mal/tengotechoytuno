/**
Servicio de consulta de mensajes de inmueble por id de inmueble
*/

import { Message } from '../models/index.js';

const getMessageById = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findById(id);
    return res.json ({
      msg: 'Mensajes obtenidos por id',
      message,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar los mensajes',
      error,
    });
  }
};


export default {
  getMessageById,
};