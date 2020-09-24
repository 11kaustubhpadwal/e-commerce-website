const fs = require("fs");

import formidable from "formidable";

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
            res.status(400).json({ err });
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
        });
      }
      break;
    // Delete product image from the server
    case "DELETE":
      {
        const pathToFile =
          "public/images/products/upload_38bd08e19627492ca6ed0db25d64385e.png";

        fs.unlink(pathToFile, function (err) {
          if (err) {
            res.status(400).json({ err });
          } else {
            res.json({ msg: "Product image has been deleted successfully." });
          }
        });
      }
      break;
    default: {
      res.status(400).json({ msg: "Invalid Request." });
    }
  }
};
