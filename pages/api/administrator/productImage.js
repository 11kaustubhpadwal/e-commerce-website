const fs = require("fs");

import formidable from "formidable";

import connectDB from "../../../database/db";

connectDB();

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default (req, res) => {
  switch (req.method) {
    // Upload product image to the server
    case "POST":
      {
        const form = new formidable.IncomingForm();
        form.uploadDir = "./public/images/products";
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
          if (err) {
            res
              .status(400)
              .json({ msg: "Failed to add product. Please try again." });
          } else {
            if (
              files.productImage === null ||
              files.productImage === undefined
            ) {
              res
                .status(400)
                .json({ msg: "Failed to add product. Please try again." });
            } else {
              fs.rename(
                files.productImage.path,
                form.uploadDir + "/" + files.productImage.name,
                (err) => {
                  //console.log(err);
                }
              );
              res.json({ msg: "Product image uploaded successfully." });
            }
          }
        });
      }
      break;
    // Delete product image from the server
    case "DELETE":
      {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
          if (err) {
            res
              .status(400)
              .json({ msg: "Failed to remove product. Please try again." });
          } else {
            if (fields.imageName === null || fields.imageName === undefined) {
              res
                .status(400)
                .json({ msg: "Failed to remove product. Please try again." });
            } else {
              const pathToFile = `public/images/products/${fields.imageName}.jpg`;

              fs.unlink(pathToFile, function (err) {
                if (err) {
                  res.status(400).json({ err });
                } else {
                  res.json({
                    msg: "Product image has been deleted successfully.",
                  });
                }
              });
            }
          }
        });
      }
      break;
    default: {
      res.status(400).json({ msg: "Invalid Request." });
    }
  }
};
