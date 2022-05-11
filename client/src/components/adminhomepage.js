import React from "react";
import "../css/table.css";
import axios from "axios";

class Adminhomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/allbookings").then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2
          className="text-center"
          style={{ color: "black", marginTop: "-114%" }}
        >
          Booking List
        </h2>

        <br />

        <table
          className="table table-striped table-bordered"
          id="table"
          style={{
            textAlign: "center",
            marginLeft: "-370px",
            marginTop: "-10px",
            backgroundColor: "transparent",
            height: "100px"
          }}
        >
          <thead>
            <tr>
              <th className="text-center" style={{ color: "white" }}>
                Username
              </th>
              <th className="text-center" style={{ color: "white" }}>
                Seat Number
              </th>
              <th className="text-center" style={{ color: "white" }}>
                Start Date
              </th>
              <th className="text-center" style={{ color: "white" }}>
                End Date
              </th>
              <th className="text-center" style={{ color: "white" }}>
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(data =>
              <tr key={data.id}>
                <td style={{ color: "white" }}>
                  {" "}{data.fullName}{" "}
                </td>
                <td style={{ color: "white" }}>
                  {" "}{data.seatnumber}
                </td>
                <td style={{ color: "white" }}>
                  {" "}{data.startdate}
                </td>
                <td style={{ color: "white" }}>
                  {" "}{data.enddate}
                </td>
                <td>
                  <button
                    onClick={() => {
                      localStorage.setItem("fullname", data.fullName);
                      localStorage.setItem("dateofbirth", data.dateOfBirth);
                      localStorage.setItem("email", data.email);
                      localStorage.setItem("mobile", data.mobile);
                      localStorage.setItem("address", data.address);
                      localStorage.setItem("gender", data.gender);
                      localStorage.setItem("seatnumber", data.seatnumber);
                      localStorage.setItem("startdate", data.startdate);
                      localStorage.setItem("enddate", data.enddate);
                      localStorage.setItem("price", data.price);
                      localStorage.setItem("idtype", data.idtype);
                      localStorage.setItem("idnumber", data.idnumber);
                      localStorage.setItem("filename", data.image);
                      localStorage.setItem("id", data._id);
                      window.location.href = "/editdetails";
                    }}
                  >
                    Add Date
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Adminhomepage;
