import mongoose from 'mongoose';


const propertySchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },

  outsideNumber:{
    type: Number,
    required: true,
  },

  interiorNumber: {
    type: Number,
    required: true,
  },

  zipCode: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  typeOffer: {
    type: String,
    enum: ['sell', 'rental'],
    default: 'sell',
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: String,
  
  propertyType: {
    type: String,
    required: true,
  },
  
  numberRooms: {
    type: Number,
    required: true,
  },
  
  images: [{
    type: String,
    required: true,
  }],
});

export default mongoose.model('Property', propertySchema);