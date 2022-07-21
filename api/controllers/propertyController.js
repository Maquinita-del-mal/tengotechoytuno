import { model } from 'mongoose';
import { Property } from '../models/index.js';

const returnError = (msg, res) => {
  return res.status(500).json({
    msg,
  });
};

const create = async (req, res) => {

    try {
        const newProperty = await Property.create(req.body);
        return res.json({
          msg: 'Property created',
          property: newProperty,
        });
      } catch (error) {
        if (process.env.NODE_ENV === 'test') {
          console.error(error);
        }
        return returnError('Error creating property', res);
      }

};

const getAll = async (req, res) => {

};

const getById = async (req, res) => {

};


const updateById = async (req, res) => {
    
    try {
      const foundProperty = await Property.findByIdAndUpdate(req.params.id,req.body);
      return res.json({
        msg: 'Property created',
        property: foundProperty,
      })
    } catch (error) { 
      throw new Error ('an error has ocurred'); 
    }

    
};

const deleteById = async (req, res) => {

};

export { create, getAll, getById, updateById, deleteById };
