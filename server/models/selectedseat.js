const mongoose = require("mongoose");

const Selectedseat = new mongoose.Schema({
  selectedSeat: {
    type: String,
    required: true
  }
});

const seatmodel = mongoose.model("selectedSeat", Selectedseat);
module.exports = seatmodel;
