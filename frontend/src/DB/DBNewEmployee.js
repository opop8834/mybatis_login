import React, { useState } from "react";
import InputNewEmployee from "../Reusable/InputNewEmployee";
import axios from "axios";

function DBNewEmployee({parentShowing}) {
  const [InputV, setInputV] = useState({
    id : '',
    name : '',
    password : '',
  });
  const onChangeValue = (event) => {
    setInputV((current) => {
      return {...current,   // 기존에 저장되어 있는 값을 불러오고 저장할 것
      [event.target.name]: event.target.value}
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (InputV.id === "" ||
    InputV.name === "" ||
    InputV.password === "") {
        return;
    }

    await axios
    .post("/api/id", InputV.id)
    .then((response) => {
    axios
    .get("/api/id/user")
    .then((response) => {
      if (response.data.length === 0)
      {
        axios
        .post("/api/user", InputV)
        .then((response) => {
          parentShowing(false);
          alert("Success");
        }); 
      }
      else{
        alert("Already exists");
      }
    })
    .catch((error) => console.log(error));
    });
    setInputV({
      id : '',
      name : '',
      password : '',
    });
  };
  return <div>
    <InputNewEmployee value={InputV}
          onChange={onChangeValue}
          onSubmit={onSubmit}/>
  </div>;
}

export default DBNewEmployee;
