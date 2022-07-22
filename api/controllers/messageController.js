import { Message, Property } from "../models/index.js";

const returnError = (msg, res) => {
    return res.status(500).json({
        msg,
    });
};

const create = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        const property = await Property.findById(req.params.id)
        property.messages.push(newMessage.id);
        await property.save();
          return res.json({
            msg: 'mensaje creado',
            mensaje: newMessage,
        })
    } catch (error) {
        return returnError('Error creating message', res);
    }
}

const getAllMsg = async (_, res) => {
    try {
      const messages = await Message.find();
       return res.json({
           msg: 'mensajes obtenidos',
           messages
       })
    } catch (error) {
        return returnError('Error al obtener mensajes', res);  
    }
} 

export { create, getAllMsg }