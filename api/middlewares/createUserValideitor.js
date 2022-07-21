import joi from "joi"
import userController from "../controllers/usersController";

const 
    userSchema = joi.object({
        name: joi.string().required(),
        lastName: joi.string().required(),  
        birthday: joi.date().required(),
        idNum: joi.number().required(),
        phone: joi.string().required(),
        email: joi.string().required(),
        residence: joi.string().required(),
        password: joi.string().required(),
    })
 

export default async(req,res,next)=> {
    try {
        const value = await userSchema.validateAsync(req.body);
        next()
    }
    catch (err) {
        return res.status(400).json({err})
    }
}

