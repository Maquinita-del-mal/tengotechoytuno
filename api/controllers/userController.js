import { User } from '../models/User'
const {idNum, role} = User

const deleteUserById = async (req, res) => {
    try {
        await User.deleteOne({
            id: req.params.id,
        })
        return res.json({
            msg: 'Usuario Eliminado'
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Ha ocurrido un error al borrar autor',
            error
        })
    }
}

export {
    deleteUserById
}