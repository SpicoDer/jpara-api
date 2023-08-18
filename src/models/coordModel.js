import mongoose from "mongoose";

const coordSchema = new mongoose.Schema({
  lat: {
    type: Number,
    required: (true, "Latitude is required")
  },
  lon: {
    type: Number,
    required: (true, "Longitude is required")
  }
});

export const Coord = mongoose.model("Coord", coordSchema);
