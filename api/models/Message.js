import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   mail: {
    type: String,
    required: true,
    unique : true  
   },
   phone: {
    type: String,
    required: true
   },
   messsage: {
       type: String,
       required: true
   }
})

export default mongoose.model('Message', messageSchema)