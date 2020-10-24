import mongoose from "mongoose";

export default async function connectDB(req, res, next) {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("CONNECTED TO DATABASE.");
  } catch (error) {
    console.log(error);
  }

  return next();
}
