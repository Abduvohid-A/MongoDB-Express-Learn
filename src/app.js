import express from "express";
import {connectDB} from "./config/db.js";
import Router from "./routes/index.routes.js";

export const app = express();
connectDB();

app.use(express.json());

app.use("/", Router);

