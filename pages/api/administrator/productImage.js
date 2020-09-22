const Product = require("../../../database/models/Product");
const fs = require("fs");

import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  switch (req.method) {
    case "GET":
      {
        res.json({ msg: "GET Route Hit!" });
      }
      break;
    // Add a new product
    case "POST":
      {
        const form = new formidable.IncomingForm();
        form.uploadDir = "./public/images/products";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
          if (err) {
            res.status(400).json({ err });
          } else {
            res.json({ files });
          }
        });
      }
      break;
    case "DELETE":
      {
        const pathToFile =
          "public/images/products/upload_38bd08e19627492ca6ed0db25d64385e.png";

        fs.unlink(pathToFile, function (err) {
          if (err) {
            res.status(400).json({ err });
          } else {
            res.json({ msg: "Product Image deleted successfully." });
          }
        });
      }
      break;
    default: {
      res.json({ msg: "Invalid Request." });
    }
  }
};
