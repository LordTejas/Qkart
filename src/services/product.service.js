const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get Product by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getProductById = async (id) => {
  return Product.findById(id);
};

/**
 * Fetch all products
 * @returns {Promise<List<Products>>}
 */
const getProducts = async () => {
  return Product.find({})
};


module.exports = {
  getProductById,
  getProducts,
};
