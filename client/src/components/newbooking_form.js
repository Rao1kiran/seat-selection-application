import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./style.css";

const isEmpty = value => value.trim() === "";
// const isFiveChars = (value) => value.trim().length === 5;
const isTenChars = value => value.trim().length === 10;

const NewbookingForm = props => {
  const navigate = useNavigate();
  var SeatNumber = localStorage.getItem("seatnumber");
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    gender: true,
    dateofBirth: true,
    email: true,
    Number: true,
    startdate: true,
    enddate: true,
    price: true,
    idtype: true,
    idnumber: true
  });
  const [selectedFile, setselectedFile] = useState("");
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const dateofBirthInputRef = useRef();
  const emailInputRef = useRef();
  const genderInuptRef = useRef();
  const NumberInputRef = useRef();
  const startdateInputRef = useRef();
  const enddateInputRef = useRef();
  const priceRef = useRef();
  const idtypeInputRef = useRef();
  const idnumberInputRef = useRef();
  useEffect(() => {
    priceRef.current.value = 0;
  }, []);

  var today = new Date();
  var substract_no_of_days = 30;
  today.setTime(today.getTime() - substract_no_of_days * 24 * 60 * 60 * 1000);
  if (today.getMonth() + 1 < 10 && today.getDate() < 10) {
    var substracted_date =
      today.getFullYear() +
      "-0" +
      (today.getMonth() + 1) +
      "-0" +
      today.getDate();
  } else if (today.getMonth() + 1 < 10) {
    var substracted_date =
      today.getFullYear() +
      "-0" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  } else {
    var substracted_date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-0" +
      today.getDate();
  }

  const confirmHandler = event => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDateofBirth = dateofBirthInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredNumber = NumberInputRef.current.value;
    const enteredstartDate = startdateInputRef.current.value;
    const enteredendDate = enddateInputRef.current.value;
    const enteredIdnumber = idnumberInputRef.current.value;
    const enteredGender = genderInuptRef.current.value;
    const enteredIdtype = idtypeInputRef.current.value;
    const enteredPrice = priceRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredDateofBirthIsValid = !isEmpty(enteredDateofBirth);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredNumberIsValid = isTenChars(enteredNumber);
    const enteredstartDateIsValid = !isEmpty(enteredstartDate);
    const enteredendDateIsValid = !isEmpty(enteredendDate);
    const enteredIdnumberIsValid = !isEmpty(enteredIdnumber);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      dateofBirth: enteredDateofBirthIsValid,
      email: enteredEmailIsValid,
      Number: enteredNumberIsValid,
      startdate: enteredstartDateIsValid,
      enddate: enteredendDateIsValid,
      idnumber: enteredIdnumberIsValid
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredDateofBirthIsValid &&
      enteredEmailIsValid &&
      enteredNumberIsValid &&
      enteredstartDateIsValid &&
      enteredendDateIsValid &&
      enteredIdnumberIsValid;

    if (!formIsValid) {
      return;
    }

    const fd = new FormData();
    fd.append("image", selectedFile);
    fd.append("fullname", enteredName);
    fd.append("dateofbirth", enteredDateofBirth);
    fd.append("email", enteredEmail);
    fd.append("mobile", enteredNumber);
    fd.append("address", enteredAddress);
    fd.append("gender", enteredGender);
    fd.append("startdate", enteredstartDate);
    fd.append("enddate", enteredendDate);
    fd.append("price", enteredPrice);
    fd.append("idtype", enteredIdtype);
    fd.append("idnumber", enteredIdnumber);
    fd.append("seatnumber", SeatNumber);
    console.log(
      enteredName,
      enteredDateofBirth,
      enteredEmail,
      enteredNumber,
      enteredAddress,
      enteredGender,
      enteredstartDate,
      enteredendDate,
      enteredPrice,
      enteredIdtype,
      enteredIdnumber
    );
    axios.post("http://localhost:3001/imageupload", fd).then(res => {
      if (res.data === "data uploaded successfully") {
        alert("Booking was successfull");
      }
    });
  };

  const closeFunction = () => {
    navigate("/adminhomepage");
  };

  return (
    <div
      class="container"
      style={{
        marginLeft: "20%",
        marginTop: "70%",
        width: "850px",
        height: "1000px"
      }}
    >
      <header>New Booking</header>

      <h1 className="seat_no">
        Seat no: {SeatNumber}
      </h1>

      <form>
        <div class="form first">
          <div class="details personal">
            <span class="title">Personal Details</span>

            <div class="fields">
              <div class="input-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  ref={nameInputRef}
                  placeholder="Enter your name"
                />
                {!formInputsValidity.name && <p>Please enter a valid name !</p>}
              </div>

              <div class="input-field">
                <label htmlFor="dateofbirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateofBirth"
                  ref={dateofBirthInputRef}
                  min={"1975-01-01"}
                  placeholder="Enter birth date"
                />
                {!formInputsValidity.dateofBirth &&
                  <p>Please enter a valid Date of Birth !</p>}
              </div>

              <div class="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  ref={emailInputRef}
                  placeholder="Enter your email"
                />
                {!formInputsValidity.email &&
                  <p>Please enter a valid email !</p>}
              </div>

              <div class="input-field">
                <label htmlFor="number">Mobile Number</label>
                <input
                  type="number"
                  id="number"
                  ref={NumberInputRef}
                  placeholder="Enter number"
                />
                {!formInputsValidity.Number &&
                  <p>Please enter a valid Number !</p>}
              </div>
              <div class="input-field">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  ref={addressInputRef}
                  placeholder="Address"
                />
                {!formInputsValidity.address &&
                  <p>Please enter a valid Address !</p>}
              </div>
              <div class="input-field">
                <label>Gender</label>
                <select ref={genderInuptRef} required>
                  <option disabled selected>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
          </div>

          <div class="details ID">
            <span class="title">Booking Details</span>
            <span class="title" />
            <div class="fields">
              <div class="input-field">
                <label htmlFor="issueddate">Start Date</label>
                <input
                  type="date"
                  id="issueddate"
                  ref={startdateInputRef}
                  min={substracted_date}
                  placeholder="Enter your issued date"
                />
                {!formInputsValidity.startdate &&
                  <p>Please pick Start Date !</p>}
              </div>

              <div class="input-field">
                <label htmlFor="experydate">End Date</label>
                <input
                  type="date"
                  id="experydate"
                  ref={enddateInputRef}
                  onChange={() => {
                    var date1 = new Date(startdateInputRef.current.value);
                    var date2 = new Date(enddateInputRef.current.value);
                    var Difference_In_Time = date2.getTime() - date1.getTime();
                    var Difference_In_Days =
                      Difference_In_Time / (1000 * 3600 * 24);
                    priceRef.current.value =
                      Difference_In_Days * 40 + " " + "INR";
                  }}
                  min={"2021-11-01"}
                  placeholder="Enter expiry date"
                />
                {!formInputsValidity.enddate && <p>Please pick End Date !</p>}
              </div>
              <div class="input-field">
                <label htmlFor="address">Price</label>
                <input
                  type="text"
                  id="address"
                  ref={priceRef}
                  placeholder="Price"
                />
              </div>
            </div>
          </div>
          <div class="details personal">
            <span class="title">Identity Details</span>

            <div class="fields">
              <div class="input-field">
                <label>ID Type</label>
                <select ref={idtypeInputRef} required>
                  <label disabled selected>
                    Select ID
                  </label>

                  <option disabled>Select Id</option>
                  <option value="Adhar Card">Adhar Card</option>
                </select>
              </div>
              <div class="input-field">
                <label htmlFor="experydate">ID Number</label>
                <input
                  type="text"
                  id="experydate"
                  ref={idnumberInputRef}
                  placeholder="Enter ID number"
                />
                {!formInputsValidity.idnumber &&
                  <p style={{ width: "max-content" }}>
                    Please enter a valid Id Number !
                  </p>}
              </div>
              <div class="input-field">
                <label htmlFor="experydate">Pick Aadhar File</label>
                <input
                  type="file"
                  name="image"
                  onChange={e => setselectedFile(e.target.files[0])}
                  required
                />
              </div>
              <div class="details personal">
                <div class="fields">
                  <div class="buttons">
                    <div class="backBtn" onClick={closeFunction}>
                      <i class="uil uil-navigator" />
                      <span class="btnText">Back</span>
                    </div>

                    <button class="sumbit" onClick={confirmHandler}>
                      <span class="btnText">Upload</span>
                      <i class="uil uil-navigator" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewbookingForm;
