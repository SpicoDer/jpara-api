import express from "express";
import { readCoords, updateCoords } from "../controllers/coordController.js";

export const coordsRouter = express.Router();

coordsRouter.route("/").get(readCoords).post(updateCoords);
