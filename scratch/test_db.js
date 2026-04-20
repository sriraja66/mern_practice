import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

console.log("Testing connection to:", uri.replace(/[^/]*:[^/]*@/, "***:***@"));

async function test() {
  try {
    await mongoose.connect(uri);
    console.log("SUCCESS: Connected to MongoDB!");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("FAILURE: Could not connect to MongoDB");
    console.error(err);
    process.exit(1);
  }
}

test();
