const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bookingmodel = require("./models/bookingdata");
const seatmodel = require("./models/selectedseat");
const adminmodel = require("./models/adminmodel");

app.use(fileUpload());
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://velmurugan:Ajith004@seatapplication.wys2k.mongodb.net/Seatapplication?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.post("/selectedseat", (req, res) => {
  var seatpicked = req.body.seat;
  console.log(seatpicked);
  const pickedseat = new seatmodel({ selectedSeat: seatpicked });
  try {
    pickedseat.save();
  } catch (error) {
    console.log(error);
  }
});

//for uploading image
app.post("/imageupload", (req, res) => {
  var imagefile = req.files.image;
  imagefile.mv(
    "D:/React App/seat-selection-application/client/public/uploads/images" +
      imagefile.name,
    function(err) {
      if (err) {
        return res.json({ status: "file not uploaded" });
      } else {
        var imagename = imagefile.name;
        var fullname = req.body.fullname;
        var dateofbirth = req.body.dateofbirth;
        var email = req.body.email;
        var mobile = req.body.mobile;
        var address = req.body.address;
        var gender = req.body.gender;
        var startdate = req.body.startdate;
        var enddate = req.body.enddate;
        var price = req.body.price;
        var idtype = req.body.idtype;
        var idnumber = req.body.idnumber;
        var seatnumber = req.body.seatnumber;
        console.log(
          imagename,
          fullname,
          dateofbirth,
          email,
          mobile,
          address,
          gender,
          startdate,
          enddate,
          price,
          idtype,
          idnumber,
          seatnumber
        );
        const bookingdata = new bookingmodel({
          fullName: fullname,
          dateOfBirth: dateofbirth,
          email: email,
          mobile: mobile,
          address: address,
          gender: gender,
          startdate: startdate,
          enddate: enddate,
          price: price,
          idtype: idtype,
          idnumber: idnumber,
          image: imagename,
          seatnumber: seatnumber
        });
        try {
          bookingdata.save();
          res.send("data uploaded successfully");
        } catch (error) {
          console.log(error);
        }
      }
    }
  );
});

app.delete("/deleteseat", async (req, res) => {
  await seatmodel.remove({});
});

app.get("/retrievepickedseat", (req, res) => {
  seatmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.put("/updateseat", async (req, res) => {
  var id = req.body.id;
  var enddate = req.body.enddate;

  console.log(id, enddate);
  try {
    await bookingmodel.findById(id, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        console.log(data.enddate);
        data.enddate = enddate;
        data.save();
        res.send("data updated successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/adminlogin/:password", (req, res) => {
  var password = req.params.password;
  console.log(password);
  adminmodel.find({ password: password }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.get("/retrievbookedseat", (req, res) => {
  bookingmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/allbookings", (req, res) => {
  bookingmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
