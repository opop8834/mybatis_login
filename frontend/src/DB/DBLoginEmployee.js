import React, { useState } from "react";
import axios from "axios";
import LoginEmployee from "../Reusable/LoginEmployee";
import Button from "../Reusable/Button";

function DBLoginEmployee({parentFunction}) {
  const [loginUser, setLoginUser] = useState([]);
  const [successLogin, setSuccessLogin] = useState(false);
  const [InputV, setInputV] = useState({
    id : '',
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
    InputV.password === "") {
        return;
    }
    // console.log(InputV);
    await axios
        .post("/api/id/pw", InputV)
        .then((response) => {
        axios
        .get("/api/id/pw/user")
        .then((response) => {
          if (response.data.length !== 0)
          {
            console.log("login success");
            setLoginUser(response.data[0]);
            localStorage.setItem("ID",response.data[0].id);
            localStorage.setItem("Loging", true);
            parentFunction();
            setSuccessLogin(true);
          }
          else{
            console.log("no User");
          }
        })
        .catch((error) => console.log(error));
        });
    setInputV({
      id : '',
      password : '',
    });
  };
  return <div>
    {successLogin? <h1>로그인완료</h1> : null }
    <LoginEmployee value={InputV}
          onChange={onChangeValue}
          onSubmit={onSubmit}/>
  </div>;
}

export default DBLoginEmployee;
