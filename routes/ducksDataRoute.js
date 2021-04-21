const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const DuckData = require("../models/DuckData");

router.get("/", (req, res) => {
  DuckData.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/foodTypes", (req, res) => {
  DuckData.distinct("foodsFed.food")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error in receiving data");
    });
});

router.post("/submitDuckData", (req, res) => {
  const {
    personName,
    timeFed,
    duckLocation,
    numberOfDucksFed,
    foodsFed,
  } = req.body;

  const duckData = new DuckData({
    _id: new mongoose.Types.ObjectId(),
    personName,
    timeFed: new Date(timeFed),
    duckLocation,
    numberOfDucksFed,
    foodsFed,
  });

  duckData
    .save()
    .then((response) => {
      console.log(response);
      res.status(200).json({
        message: "Success!",
        response,
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send(
          "Error in adding data. Please make sure all fields are not empty"
        );
    });
});

module.exports = router;
