const rn = require("random-number");

const Product = require("../../../database/models/Product");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      {
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
      }
      break;
    // Add a new product's text fields
    case "POST":
      {
        const options = {
          min: 1000,
          max: 9999,
          integer: true,
        };

        const { name, quantity, cost, description } = req.body;

        try {
          let productID = `#${rn(options)}`;

          let productExists = await Product.findOne({ productID: productID });

          if (productExists) {
            res
              .status(400)
              .json({ msg: "An error occurred. Please try again." });
          } else {
            let product = new Product({
              name,
              quantity,
              cost,
              description,
              productID,
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
            .json({ msg: "Failed to add product. Please try again." });
        }
      }
      break;
    case "DELETE":
      {
        res.json({ msg: "DELETE Route Hit!" });
      }
      break;
    default: {
      res.json({ msg: "Invalid Request." });
    }
  }
};
