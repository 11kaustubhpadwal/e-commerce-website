import nextConnect from "next-connect";
import middleware from "../../../middleware";

const handler = nextConnect();

handler.use(middleware);

const Product = require("../../../database/models/Product");

export const config = {
  api: {
    externalResolver: true,
  },
};

// Get a product
handler.get(async (req, res) => {
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
});

export default handler;
