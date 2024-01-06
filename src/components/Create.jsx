import { useState } from "react";
import {Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  let [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  let handleValues = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const header = { "Access-Control-Allow-Origin": "*" };

  let move = useNavigate();

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
    axios
      .post("https://658c3077859b3491d3f5adbf.mockapi.io/crud-app", {
        name: values.name,
        email: values.email,
        phone: values.phone,
        city: values.city,
        header,
      })

      .then(() => {
        move("/read");
      });
  };

  return (
    <>
   
    <div className="outer">
      <form onSubmit={handleSubmit}>
        <h1>User Details</h1>
        <span>
          <hr />
        </span>

        <div className="inner">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            id="name"
            name="name"
            value={values.name}
            onChange={handleValues}
            required
          />
        </div>

        <div className="inner">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            id="email"
            value={values.email}
            onChange={handleValues}
            required
          />
        </div>

        <div className="inner">
          <label htmlFor="phone">Phone </label>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            id="phone"
            value={values.phone}
            onChange={handleValues}
            required
          />
        </div>

        <div className="inner">
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="Enter Your City Name "
            name="city"
            id="city"
            value={values.city}
            onChange={handleValues}
            required
          />
        </div>
        <button>Add User</button>
      </form>
     
    </div>
    <div className="addUser-btn">
      <Link to="/read">
          <button className="addUser">Show All Entries</button>
        </Link>
      </div>
    </>
  );
}

export default Create;
