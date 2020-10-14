import mongoose from "mongoose";

export default async () => {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  await mongoose.connect(process.env.NEXT_PUBLIC_DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};
