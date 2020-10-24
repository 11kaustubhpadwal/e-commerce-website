import nextConnect from "next-connect";
import middleware from "../../../middleware";

const handler = nextConnect();

handler.use(middleware);

const Order = require("../../../database/models/Order");

export const config = {
  api: {
    externalResolver: true,
  },
};

// Get all orders of all users
handler.get(async (req, res) => {
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
});

export default handler;
