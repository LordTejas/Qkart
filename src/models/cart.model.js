const mongoose = require('mongoose');
const { productSchema } = require('./product.model');
const config = require("../config/config")

const cartSchema = mongoose.Schema(
  {
  },
  {
    timestamps: false,
  }
);


/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports.Cart = Cart;