import React, { useState, createContext,useEffect } from "react";
import "./styles.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { Seatinfo } from "./components/seat_info";
import { useDispatch } from "react-redux";
import {SelectseatNo} from "./Store/seatAction"
import axios from "axios";


const seatID = createContext();

export const Seat = () => {
  const  dispatch = useDispatch();

  const navigate = useNavigate();
  /*var date = new Date();
  var today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  var alertdate = date.getDate()+5 */
  
  var t = new Date();
  var today = t.getDate();
var month = "0"+(t.getMonth()+1);
    var date = "0"+t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     var currentdate = "2022-05-17";
     //t.getFullYear()+"-"+month+"-"+date;

     var t = new Date();
    t.setDate(t.getDate() + 5); 
    var month = "0"+(t.getMonth()+1);
    var date = "0"+t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     var dayfive = t.getFullYear()+"-"+month+"-"+date;

     var t = new Date();
      t.setDate(t.getDate() + 4); 
    var month = "0"+(t.getMonth()+1);
    var date = "0"+t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     var dayfour = t.getFullYear()+"-"+month+"-"+date;

     var t = new Date();
     t.setDate(t.getDate() + 3); 
    var month = "0"+(t.getMonth()+1);
    var date = "0"+t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     var daythree = t.getFullYear()+"-"+month+"-"+date;

     var t = new Date();
     t.setDate(t.getDate() + 2); 
    var month = "0"+(t.getMonth()+1);
    var date = "0"+t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     var daytwo = t.getFullYear()+"-"+month+"-"+date;

     var t = new Date();
     t.setDate(t.getDate() + 1); 
    var month = "0"+(t.getMonth()+1);
    var date = "0"+t.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     var dayone = t.getFullYear()+"-"+month+"-"+date;
  

   useEffect(() => {
     //alert(utc);
       axios.get("http://localhost:3001/retrievepickedseat").then((response)=>{
           for(var i=0;i<(response.data).length;i++){
           //  console.log(response.data[i].selectedSeat);
             $("#" +response.data[i].selectedSeat ).css("background-color", "green");
           }
            
       })
       axios.get("http://localhost:3001/retrievbookedseat").then((response)=>{
           
       //console.log(response.data.);
      
       for(var i=0;i<(response.data).length;i++){
             console.log(response.data[i].seatnumber);
             if(response.data[i].enddate == dayfive ||response.data[i].enddate == dayfour || response.data[i].enddate == dayfive || response.data[i].enddate == daythree || response.data[i].enddate == daytwo || response.data[i].enddate == dayone ){
              if(Date.parse(currentdate) <= Date.parse(response.data[i].enddate)){
                $("#" +response.data[i].seatnumber ).css("pointer-events", "none");
                $("#" +response.data[i].seatnumber ).css("background-color", "red");
              }else{
                $("#" +response.data[i].seatnumber ).css("background-color", "white");
              }
               
           }else{
              $("#" +response.data[i].seatnumber ).css("background-color", "blue");
           }
          }
       })
    }, [])

  const handleSubmit =  (name) => {

    const n1 = name
    localStorage.setItem('seat',n1);
    axios.delete("http://localhost:3001/deleteseat").then(()=>{
      console.log("other seats deleted");
    })
    axios.post("http://localhost:3001/selectedseat",{seat: n1}).then(()=>{
   });
    window.location.reload();
    
  }

  const continueSubmitHandler = () => {

    dispatch(SelectseatNo(localStorage.getItem('seat')))
     axios.delete("http://localhost:3001/deleteseat").then(()=>{
      console.log("other seats deleted");
    })
    navigate("/register");
  }

  return (
    <>


      <div>

        <Seatinfo />
        <div className="room">
          {/* <div className="column">
            <div className="row-no">A</div>
            <div className="row-no">B</div>
            <div className="row-no">C</div>
            <div className="row-no">D</div>
            <div className="row-no">F</div>
            <div className="row-no">E</div>
          </div> */}

          <div className="room-container">
            <div className="table"></div>

            <div className="row1">
              <div className="seat1" id="A1" title="A1" onClick={() => handleSubmit("A1")}></div>
              <div className="seat1" id="A2" title="A2" onClick={() => handleSubmit("A2")}></div>
              <div className="seat1" id="A3" title="A3" onClick={() => handleSubmit("A3")}></div>
              <div className="seat1" id="A4" title="A4" onClick={() => handleSubmit("A4")}></div>
              <div className="seat1" id="A5" title="A5" onClick={() => handleSubmit("A5")}></div>
              <div className="seat1" id="A6" title="A6" onClick={() => handleSubmit("A6")}></div>
              <div className="seat1" id="A7" title="A7" onClick={() => handleSubmit("A7")}></div>
              <div className="seat1" id="A8" title="A8" onClick={() => handleSubmit("A8")}></div>
              <div className="seat1" id="A9" title="A9" onClick={() => handleSubmit("A9")}></div>
              <div className="seat1" id="A10" title="A10" onClick={() => handleSubmit("A10")}></div>
            </div>
            <div className="table"></div>

            <div className="row1">
              <div className="seat1" id="B1" title="B1" onClick={() => handleSubmit("B1")}></div>
              <div className="seat1" id="B2" title="B2" onClick={() => handleSubmit("B2")}></div>
              <div className="seat1" id="B3" title="B3" onClick={() => handleSubmit("B3")}></div>
              <div className="seat1" id="B4" title="B4" onClick={() => handleSubmit("B4")}></div>
              <div className="seat1" id="B5" title="B5" onClick={() => handleSubmit("B5")}></div>
              <div className="seat1" id="B6" title="B6" onClick={() => handleSubmit("B6")}></div>
              <div className="seat1" id="B7" title="B7" onClick={() => handleSubmit("B7")}></div>
              <div className="seat1" id="B8" title="B8" onClick={() => handleSubmit("B8")}></div>
              <div className="seat1" id="B9" title="B9" onClick={() => handleSubmit("B9")}></div>
              <div className="seat1" id="B10" title="B10" onClick={() => handleSubmit("B10")}></div>

            </div>
            <div className="table" title="1"></div>

            <div className="row1">
              <div className="seat1" id="C1" title="C1" onClick={() => handleSubmit("C1")}></div>
              <div className="seat1" id="C2" title="C2" onClick={() => handleSubmit("C2")}></div>
              <div className="seat1" id="C3" title="C3" onClick={() => handleSubmit("C3")}></div>
              <div className="seat1" id="C4" title="C4" onClick={() => handleSubmit("C4")}></div>
              <div className="seat1" id="C5" title="C5" onClick={() => handleSubmit("C5")}></div>
              <div className="seat1" id="C6" title="C6" onClick={() => handleSubmit("C6")}></div>
              <div className="seat1" id="C7" title="C7" onClick={() => handleSubmit("C7")}></div>
              <div className="seat1" id="C8" title="C8" onClick={() => handleSubmit("C8")}></div>
              <div className="seat1" id="C9" title="C9" onClick={() => handleSubmit("C9")}></div>
              <div className="seat1" id="C10" title="C10" onClick={() => handleSubmit("C10")}></div>

            </div>
            <div className="table"></div>

            <div className="row1">
              <div className="seat1" id="D1" title="D1" onClick={() => handleSubmit("D1")}></div>
              <div className="seat1" id="D2" title="D2" onClick={() => handleSubmit("D2")}></div>
              <div className="seat1" id="D3" title="D3" onClick={() => handleSubmit("D3")}></div>
              <div className="seat1" id="D4" title="D4" onClick={() => handleSubmit("D4")}></div>
              <div className="seat1" id="D5" title="D5" onClick={() => handleSubmit("D5")}></div>
              <div className="seat1" id="D6" title="D6" onClick={() => handleSubmit("D6")}></div>
              <div className="seat1" id="D7" title="D7" onClick={() => handleSubmit("D7")}></div>
              <div className="seat1" id="D8" title="D8" onClick={() => handleSubmit("D8")}></div>
              <div className="seat1" id="D9" title="D9" onClick={() => handleSubmit("D9")}></div>
              <div className="seat1" id="D10" title="D10" onClick={() => handleSubmit("D10")}></div>

            </div>
            <div className="table"></div>

            <div className="row1">
              <div className="seat1" id="E1" title="E1" onClick={() => handleSubmit("E1")}></div>
              <div className="seat1" id="E2" title="E2" onClick={() => handleSubmit("E2")}></div>
              <div className="seat1" id="E3" title="E3" onClick={() => handleSubmit("E3")}></div>
              <div className="seat1" id="E4" title="E4" onClick={() => handleSubmit("E4")}></div>
              <div className="seat1" id="E5" title="E5" onClick={() => handleSubmit("E5")}></div>
              <div className="seat1" id="E6" title="E6" onClick={() => handleSubmit("E6")}></div>
              <div className="seat1" id="E7" title="E7" onClick={() => handleSubmit("E7")}></div>
              <div className="seat1" id="E8" title="E8" onClick={() => handleSubmit("E8")}></div>
              <div className="seat1" id="E9" title="E9" onClick={() => handleSubmit("E9")}></div>
              <div className="seat1" id="E10" title="E10" onClick={() => handleSubmit("E10")}></div>

            </div>
            <div className="table"></div>

            <div className="row1">
              <div className="seat1" id="F1" title="F1" onClick={() => handleSubmit("F1")}></div>
              <div className="seat1" id="F2" title="F2" onClick={() => handleSubmit("F2")}></div>
              <div className="seat1" id="F3" title="F3" onClick={() => handleSubmit("F3")}></div>
              <div className="seat1" id="F4" title="F4" onClick={() => handleSubmit("F4")}></div>
              <div className="seat1" id="F5" title="F5" onClick={() => handleSubmit("F5")}></div>
              <div className="seat1" id="F6" title="F6" onClick={() => handleSubmit("F6")}></div>
              <div className="seat1" id="F7" title="F7" onClick={() => handleSubmit("F7")}></div>
              <div className="seat1" id="F8" title="F8" onClick={() => handleSubmit("F8")}></div>
              <div className="seat1" id="F9" title="F9" onClick={() => handleSubmit("F9")}></div>
              <div className="seat1" id="F10" title="F10" onClick={() => handleSubmit("F10")}></div>

            </div>
          </div>
          <div style={{marginLeft:"32%"}}>
            <button className="button" id='f11'onClick={()=>navigate("/adminlogin")} >Admin</button>
            <button className="button" id='f11' onClick={() => continueSubmitHandler()}>Continue</button>
          </div>

        </div>
      </div>

      <seatID.Provider value={"selectSeat"}>
      </seatID.Provider>
      
    </>
  );
}


export default Seat;
export { seatID };


