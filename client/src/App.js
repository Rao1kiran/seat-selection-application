//import React from "react";
import "./styles.css";
import Seat from "./Seat";
import RegistrationForm from "./components/RegistrationForm";
import {Routes, Route} from "react-router-dom";
import Adminlogin from "./components/admin_login";
import Adminhomepage from "./components/adminhomepage";
import Editdetails from "./components/edit_details";
import NewbookingForm from "./components/newbooking_form";

export default function App() {
  return (
   <>
    <Routes>
      <Route path="/"element={<Seat/>}/>
      <Route path="/register"element={<RegistrationForm/>} />
      <Route path="/adminlogin"element={<Adminlogin/>}/>
      <Route path="/adminhomepage"element={<Adminhomepage/>}/>
      <Route path="/editdetails"element={<Editdetails/>}/>
      <Route path="/newbookingform"element={<NewbookingForm/>}/>
      {/* <Route path="/"element={<Seatbooking/>}/> */}
      {/* <Route path="/seatbooking"element={<Seatbooking />} /> */}

      
    </Routes>
    </>
  
  );
}