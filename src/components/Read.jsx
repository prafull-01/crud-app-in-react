import { useEffect, useState } from "react";

import axios from "axios";
import {Link } from "react-router-dom";


function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://658c3077859b3491d3f5adbf.mockapi.io/crud-app")
      .then((response) => {
        setData(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

 
  



  let handleDelete =(id)=>{
    axios.delete(`https://658c3077859b3491d3f5adbf.mockapi.io/crud-app/${id}`)
    .then(()=>{
        getData();   
    });
  }


 
  

  return (
    <>
      <h1>User Log</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.phone}</td>
                  <td>{eachData.city}</td>
                  <td>
                    <Link to={`/update/${eachData.id}`}>
                        
                        <button>Edit</button>
                    
                    </Link>
                    
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(eachData.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <div className="addUser-btn">
      <Link to="/">
          <button className="addUser">Add User</button>
        </Link>
      </div>
      
    </>
  );
}

export default Read;
