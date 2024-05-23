import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Router from "./routes/index.routes.js";

dotenv.config();

const PORT = process.env.PORT ;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());

app.use("/", Router);


mongoose.connect(MONGO_URL)
.then(() => {
  console.log("MongoDB connected with Server");

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("Failed to connected MongoDB", err);
  process.exit(1); 
});
