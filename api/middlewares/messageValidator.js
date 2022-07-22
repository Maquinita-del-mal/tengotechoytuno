import joi from 'joi';

const messageSchema = joi.object({
    name: joi.string().required(),
    mail: joi.string().required(),
    phone: joi.string().required(),
    messsage: joi.description().required(),
})

export default async (req, res, next) => {
    try {
        await messageSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(500).json({ msg: 'error al validar mensaje' })
    }
}