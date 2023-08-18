import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.js";

// Configuring env
dotenv.config({ path: "./config.env" });

// connecting to db
const db = process.env.DB;
mongoose.connect(db);

// Configuring port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
