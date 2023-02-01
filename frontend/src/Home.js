import React, { useEffect, useState } from "react";
import axios from "axios";
import DBNewEmployee from "./DB/DBNewEmployee";
import DBLoginEmployee from "./DB/DBLoginEmployee";
import Button from "./Reusable/Button";
import DB from "./DB/DB";
import DBprofile from "./DB/DBprofile";

function Home() {
  const [showing, setShowing] = useState(false);
  const [loging, setLoging] = useState(false);
  const [id,setId] = useState("");
  const onClick = () => {
    setShowing((current) => !current);
  };
  const onLogout = () => {
    localStorage.removeItem("ID");
    const temp2 = localStorage.getItem("Loging");
    localStorage.removeItem("Loging");
    setLoging(!temp2);
  }
  useEffect(() => {   // 새로고침 했는데 이미 로그인 되어 있는 상태일때
    const temp = localStorage.getItem("ID");
    const temp2 = localStorage.getItem("Loging");
    setId(temp);
    setLoging(temp2);
  }, []);
  const parentFunction = () => {   // child인 DBLoginEmployee에서 부모인 Home으로
    // 로그인을 성공 했을때 local에 저장되어 지고 id도 바꿈
    const temp = localStorage.getItem("ID");
    const temp2 = localStorage.getItem("Loging");
    setId(temp);
    setLoging(temp2);
  };
  const parentShowing = (bool) =>{
    setShowing(bool);
  } 
  return (
  <div>
    {!loging && <Button text={showing ? "뒤로" : "회원가입"} onClick={onClick}></Button>}
    {!loging && !showing && <DBLoginEmployee parentFunction={parentFunction}/>}
    {!loging && showing && <DBNewEmployee parentShowing={parentShowing}/>}
    {loging && <h1>안녕하세요 : {id}</h1>}
    {loging && <Button text="로그아웃" onClick={onLogout}/>}
    {loging && <DBprofile/>}
  </div>
  );
}

export default Home;
