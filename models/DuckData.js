const mongoose = require("mongoose");

const duckDataSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  personName: String,
  timeFed: {
    type: Date,
    default: Date.now,
    required: true,
  },
  duckLocation: {
    type: String,
    required: true,
  },
  numberOfDucksFed: { type: Number, required: true },
  foodsFed: [
    {
      food: { type: String, required: true },
      amountFed: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("DuckData", duckDataSchema);
