import nextConnect from "next-connect";
import middleware from "../../../middleware";

const handler = nextConnect();

handler.use(middleware);

const rn = require("random-number");

const Product = require("../../../database/models/Product");

export const config = {
  api: {
    externalResolver: true,
  },
};

// Get all products
handler.get(async (req, res) => {
  try {
    let products = await Product.find();

    if (!products) {
      res
        .status(400)
        .json({ msg: "An error occurred. Please refresh the page." });
    } else {
      res.json({
        msg: "All products fetched successfully.",
        products,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Failed to fetch all products. Please refresh the page.",
    });
  }
});

// Add a product
handler.post(async (req, res) => {
  const options = {
    min: 1000,
    max: 9999,
    integer: true,
  };

  const { name, quantity, cost, description, imageUrl } = req.body;

  try {
    let productID = `#${rn(options)}`;

    let productExists = await Product.findOne({ productID: productID });

    if (productExists) {
      res.status(400).json({ msg: "An error occurred. Please try again." });
    } else {
      let product = new Product({
        name,
        quantity,
        cost,
        description,
        productID,
        imageUrl,
      });

      await product.save();

      res.json({
        msg: "Product added successfully.",
        product,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to add a new product. Please try again." });
  }
});

// Remove a product
handler.delete(async (req, res) => {
  const { productID } = req.body;

  try {
    let product = await Product.findOne({ productID: productID });

    if (!product) {
      res.status(400).json({ msg: "No such product found." });
    } else {
      await Product.findOneAndRemove({ productID: productID });

      res.json({
        msg: "Product removed successfully.",
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to remove the product. Please try again." });
  }
});

export default handler;
