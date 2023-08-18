import { Coord } from "../models/coordModel.js";

const coordsId = "64ddcaed5726e472c192fdce";

export const readCoords = async (req, res) => {
  try {
    // get all docs and exclude field '__v'
    const coordsData = await Coord.findById(coordsId).select("-__v");

    res.status(200).json({
      status: "Success",
      coordinates: coordsData
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error
    });
  }
};

export const updateCoords = async (req, res) => {
  try {
    const updatedCoords = await Coord.findByIdAndUpdate(coordsId, req.body, {
      new: true,
      runValidators: true
    }).select("-__v");

    res.status(200).json({
      status: "Updated",
      coordinates: updatedCoords
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error
    });
  }
};
