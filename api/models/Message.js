import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
   nombre: {
    type: String,
    required: true
   },
   correo: {
    type: String,
    required: true,
    unique : true  
   },
   phone: {
    type: String,
    required: true
   },
   messsage: {
       type: Text,
       required: true
   }
})

export default mongoose.model('Message', messageSchema)