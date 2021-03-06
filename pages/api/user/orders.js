import nextConnect from "next-connect";
import middleware from "../../../middleware";

const handler = nextConnect();

handler.use(middleware);

const Order = require("../../../database/models/Order");

const rn = require("random-number");
import moment from "moment";
moment().format();

export const config = {
  api: {
    externalResolver: true,
  },
};

// Fetch all orders of a user
handler.get(async (req, res) => {
  const {
    query: { email },
  } = req;

  try {
    let orders = await Order.find({ email: email });

    if (orders.length <= 0) {
      res.status(400).json({ msg: "You haven't placed any orders yet." });
    } else {
      res.json(orders);
    }
  } catch (error) {
    res.status(400).json({
      msg: "Failed to fetch all the orders. Please refresh the page.",
    });
  }
});

// Place a new order
handler.post(async (req, res) => {
  const options = {
    min: 100000,
    max: 999999,
    integer: true,
  };

  const {
    firstName,
    lastName,
    totalCost,
    email,
    deliveryAddress,
    deliveryMethod,
    paymentMethod,
    orderItems,
  } = req.body;

  let orderID = rn(options).toString();
  let now = `${moment().date()}/${moment().month() + 1}/${moment().year()}`;

  try {
    let orderExists = await Order.findOne({ orderNumber: orderID });

    if (orderExists) {
      res.status(400).json({ msg: "An error occurred. Please try again." });
    } else {
      let order = new Order({
        firstName,
        lastName,
        totalCost,
        email,
        deliveryAddress,
        deliveryMethod,
        paymentMethod,
        orderItems,
        orderNumber: orderID,
        date: now,
        status: "On going",
      });

      await order.save();

      res.json({
        msg: "Your order has been placed successfully.",
        order,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Failed to place your order. Please try again.",
    });
  }
});

// Cancel an order
handler.patch(async (req, res) => {
  const {
    query: { orderNumber },
  } = req;

  try {
    let order = await Order.findOne({ orderNumber });

    if (!order) {
      res.status(400).json({ msg: "Order not found." });
    } else {
      order = await Order.findOneAndUpdate(
        { orderNumber },
        { $set: { status: "Cancelled" } },
        { new: true }
      );

      res.json({ msg: "The order has been cancelled successfully." });
    }
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to cancel the order. Please try again." });
  }
});

export default handler;
