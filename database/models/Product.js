const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
    unique: true,
  },
});

global.ProductSchema =
  global.ProductSchema || mongoose.model("product", ProductSchema);

module.exports = global.ProductSchema;
