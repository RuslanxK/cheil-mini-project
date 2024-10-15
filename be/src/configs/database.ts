import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURI: string = process.env.MONGO_URI || '';
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Successfully connected to the MongoDB database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

export default mongoose;