import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

dotenv.config();

const uri = process.env.MONGO_URI;

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

app.use('/api/user', userRoutes);