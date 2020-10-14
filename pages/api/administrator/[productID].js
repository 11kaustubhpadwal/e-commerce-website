const Product = require("../../../database/models/Product");

import connectDB from "../../../database/db";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  const db = await connectDB();

  switch (req.method) {
    // Fetch a product
    case "GET":
      {
        const {
          query: { productID },
        } = req;

        try {
          let product = await Product.findOne({ productID: `#${productID}` });

          if (!product) {
            res.status(400).json({ msg: "No such product found." });
          } else {
            res.json(product);
          }
        } catch (error) {
          res.status(400).json({
            msg: "Failed to fetch the product. Please refresh the page.",
          });
        }
      }
      break;
    default: {
      res.status(400).json({ msg: "Invalid Request." });
    }
  }
};
