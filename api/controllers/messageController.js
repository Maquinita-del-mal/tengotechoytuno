import { Message } from "../models/index.js";

const returnError = (msg, res) => {
    return res.status(500).json({
        msg,
    });
};

const create = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body)
          return res.json({
            msg: 'mensaje creado',
            mensaje: newMessage,
        })
    } catch (error) {
        return returnError('Error creating message', res);
    }
}

export { create }