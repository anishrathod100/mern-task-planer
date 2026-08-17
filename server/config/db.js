import mongoose from "mongoose";
import dns from "dns";
// Force Node.js to use Google DNS for lookups
dns.setServers(["8.8.8.8", "0.0.0.0"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
