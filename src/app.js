import express from "express";
import { coordsRouter } from "./routes/coordsRouter.js";

export const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/coordinates", coordsRouter);
