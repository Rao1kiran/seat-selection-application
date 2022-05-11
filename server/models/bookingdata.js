const mongoose = require("mongoose");

const Bookingdata = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  startdate: {
    type: String,
    required: true
  },
  enddate: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  idtype: {
    type: String,
    required: true
  },
  idnumber: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    data: Buffer,
    contentType: String
  },
  seatnumber: {
    type: String,
    required: true
  }
});

const bookingmodel = mongoose.model("booking", Bookingdata);
module.exports = bookingmodel;
