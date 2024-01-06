import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  

 
  useEffect(() => {
    axios
      .get("https://658c3077859b3491d3f5adbf.mockapi.io/crud-app/" + id)
      .then((response) => {
        setValues({
          ...values,
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          city: response.data.city,
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },[] ); 

  
  let navigate = useNavigate();
  let handleSubmit = (e)=>{
    e.preventDefault();
    axios
    .put("https://658c3077859b3491d3f5adbf.mockapi.io/crud-app/" + id,values)
    .then(()=>{
      navigate('/read');
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

  }




  return (
    <div className="outer">
      <form onSubmit={handleSubmit}>
        <h1>Update User Details</h1>
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
            onChange={(e)=>{setValues({...values, name: e.target.value})}}
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
            onChange={(e)=>{setValues({...values, email: e.target.value})}}
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
            onChange={(e)=>{setValues({...values, phone: e.target.value})}}
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
            onChange={(e)=>{setValues({...values, city: e.target.value})}}
            required
          />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
}

export default Update;
