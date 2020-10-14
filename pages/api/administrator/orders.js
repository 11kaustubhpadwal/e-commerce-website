const Order = require("../../../database/models/Order");

import connectDB from "../../../database/db";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req, res) => {
  await connectDB();

  switch (req.method) {
    // Fetch all orders of all users
    case "GET":
      {
        try {
          let orders = await Order.find();

          if (orders.length <= 0) {
            res.status(400).json({ msg: "There are no orders to show." });
          } else {
            res.json(orders);
          }
        } catch (error) {
          res.status(400).json({
            msg: "Failed to fetch all the orders. Please refresh the page.",
          });
        }
      }
      break;
    default: {
      res.status(400).json({ msg: "Invalid Request." });
    }
  }
};
