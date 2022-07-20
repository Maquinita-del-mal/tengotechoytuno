import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  birthday: Date,
  idNum: {
    type: Number,
    required: [true, 'Id number necessary'],
  },
  phone: Number,
  email: {
    type: String,
    required: [true, 'Mail necessary'],
  },
  residence: String,
  password: {
    type: String,
    required: [true, 'Password required'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: [true, 'Role required']
  }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
