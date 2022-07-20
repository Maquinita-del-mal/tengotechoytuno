
import * as bcrypt from 'bcrypt';
import  UserModel from '../models/User.js';

const userController = {};

userController.createUser =  (async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
        name: req.body.name,
        lastName: req.body.lastName,
        birthday: new Date(),
        idNum: req.body.idNum,
        phone: req.body.phone,
        email: req.body.email,
        residence: req.body.residence,
        password: hashedPassword,
    }
   
    const createdUser = await UserModel.create(newUser);
    res.status(201).json(createdUser)
})

export default userController;