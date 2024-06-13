import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected...");
//   })
//   .catch((err) => {console.log(err)});

const app = express();


app.listen(3000, async () => {
    try {
      await mongoose.connect.uri
      console.log("connect mongdb")
    } catch (error) {
      console.log(error);
    }
  console.log("Server listening on port 3000");
});
