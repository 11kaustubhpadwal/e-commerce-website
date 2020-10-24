import nextConnect from "next-connect";
import connectDB from "./database/db";

const middleware = nextConnect();

middleware.use(connectDB);

export default middleware;
