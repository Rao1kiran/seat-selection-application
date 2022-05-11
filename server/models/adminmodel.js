const mongoose = require("mongoose");

const Adminmodel = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const adminmodel = mongoose.model("admin", Adminmodel);
module.exports = adminmodel;
