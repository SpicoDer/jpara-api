import express from "express";
import { coordsRouter } from "./routes/coordsRouter.js";

export const app = express();

// middlewares
app.use(express.json());

// CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// routes
app.use("/coordinates", coordsRouter);
