import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("failed to connect MongoDB");
  }
};
