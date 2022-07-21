import jwt from 'jwt-simple'
import config from '../config/index.js'

export default async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                msg: 'No authorization'
            })
        }
        const user = jwt.decode(token, config.token.secret)
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al validar'
        })
    }
}