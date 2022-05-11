import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/admin_login.css";

const Adminlogin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      axios.get("http://localhost:3001/adminlogin/" + password).then(res => {
        if (res.data[0].email === email && res.data[0].password === password) {
          navigate("/adminhomepage");
        } else {
          alert("invalid email or password");
        }
      });
    }
  };
  return (
    <div
      className="container"
      style={{ marginLeft: "9%", height: "282px", marginTop: "30%" }}
    >
      <div
        className="input-container"
        style={{ marginTop: "80px", marginLeft: "57px" }}
      >
        <label>Username </label>&nbsp;&nbsp;
        <input
          type="text"
          name="uname"
          value={email}
          onChange={e => setemail(e.target.value)}
        />
      </div>
      <br />
      <div
        className="input-container"
        style={{ marginTop: "10px", marginLeft: "57px" }}
      >
        <label>Password </label>&nbsp;&nbsp;
        <input
          type="password"
          name="pass"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
      </div>
      <br />
      <div
        className="button-container"
        style={{ marginTop: "10px", marginLeft: "147px" }}
      >
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Adminlogin;
