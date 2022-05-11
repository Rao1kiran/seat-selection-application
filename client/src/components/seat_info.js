export const Seatinfo = ()=>{
    return  <div>
   
    <div className="movie-container">
      {/* <label>Select a movie :</label> */}
      {/* <select id="movie">
        <option value="150"> Dil Bechara (₹150) </option>
        <option value="180"> Avengers: Endgame (₹180) </option>
        <option value="260"> Dhoni The Untold Story (₹260) </option>
        <option value="390"> URI The surgical strike (₹390) </option>
      </select> */}
    </div>

    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
   
    {/* <p className="text">
      you have selected{" "}
      <b>
        {" "}
        <span id="count">0</span>{" "}
      </b>{" "}
      seat for a price of ₹{" "}
      <b>
        {" "}
        <span id="total"> 0 </span>{" "}
      </b>
      .
    </p> */}
  
  </div>
}