import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DisplayRecord = () => {
  const [Display, setDisplay] = useState([]);
  const [data, setData] = useState({ firstname: "", lastname: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (data.firstname === "" && data.lastname === "") {
      alert("Please Enter a name in textbox");
    } else {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      const Records = [...Display, data];
      setDisplay(Records);
      setData(null);
    }
  };

  return (
    <>
      <h1>Assignment 2 Display Record</h1>
      <div className="container">
        <TextField
          id="firstname"
          sx={{ marginLeft: "10px", marginRight: "20px", marginBottom: "35px" }}
          required
          label="First Name "
          onChange={handleChange}
          name="firstname"
          variant="outlined"
        />

        <TextField
          id="lastname"
          sx={{ marginRight: "20px" }}
          label="Last Name"
          onChange={handleChange}
          required
          name="lastname"
          variant="outlined"
        />

        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>

        <table>
          <tbody>
            <tr>
              <th>Sr. no</th>
              <th>First Name</th>
              <th>Last name</th>
            </tr>
            {Display.map((display, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{display.firstname}</td>
                <td>{display.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>
          <Link to={"/"}>Go to Assignment 1</Link>
        </h3>
      </div>
    </>
  );
};

export default DisplayRecord;
