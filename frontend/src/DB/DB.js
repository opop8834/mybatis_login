import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Reusable/Button";

// 테스트할때 User 리스트 출력용
function Db() {
    const [table, setTable] = useState([]);

    useEffect(() => {
      axios
      .get("/api/users")
      .then((response) => {
        setTable(response.data);
      })
      .catch((error) => console.log(error));
    }, []);
  
    return (
      <div className="App">
        {table.map((v, idx) => (
            <p key={`${v} - ${idx}`}>
              {v.id}
              <br/>
              {v.name}
              <br/>
              {v.password}
              <br/>
              ----------------------
            
             </p>
          ))}
      </div>
    );
  }
  
  export default Db;
  