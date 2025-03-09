import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("mongodb amjilttai holbogdloo");
  } catch (error) {
    console.log("mongodb holbogdhod aldaa garlaa");
  }
};
