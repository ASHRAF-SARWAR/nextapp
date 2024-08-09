import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log("Connecting...");
    await mongoose
      .connect(
        "mongodb+srv://ashrafsarwar546:5gNxdr9dU1L5LVGq@cluster0.mohg28q.mongodb.net/dashbord"
      )
      .then(() => console.log("Model connected to database"));
  } catch (err) {
    console.log("this is error", err);
  }
};
