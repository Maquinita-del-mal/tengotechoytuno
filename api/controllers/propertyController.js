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

const getAll = async (req, res) => {};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({
        msg: 'No se encontró el recurso solicitado',
      });
    }
    return res.json({
      msg: 'propiedad encontrada',
      property,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al buscar propiedad',
    });
  }
};

const updateById = async (req, res) => {};

const deleteById = async (req, res) => {};

/**
 * Filtro por rango de precio
 * Filtro por país y/o localidad
 * Filtro por tipo de inmueble
 * Filtro por número de recámaras
 * los filtros se pasan por medio de los req.query params
 */

const getFiltersPropertys = async (req, res) => {
  const filters = req.query;
  try {
    const propertys = await Property.find(filters);
    return res.json({
      msg: 'Inmuebles obtenidos',
      propertys,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar los inmuebles',
      error,
    });
  }
};

export {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  getFiltersPropertys,
};
