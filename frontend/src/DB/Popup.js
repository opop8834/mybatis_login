import Modal from "react-modal";
import { useState } from "react";
import Button from "../Reusable/Button";
import InputValue from "../Reusable/InputValue";
import axios from "axios";

function Popup({id,name,password,passwordfilter, onClick, parentFunction}) {
    const [onPopupPW, setOnPopupPW] = useState(false);
    const [InputV, setInputV] = useState("");
    const [oldInputV, setOldInputV] = useState("");
    const [showUpdate, setShowUpdate] = useState(false); 
    const [showRemove, setShowRemove] = useState(false); 
    const clickRemoveUser = async () => {
        if (window.confirm("정말 탈퇴하시겠습니까?"))
        {
            alert("탈퇴");
            axios
            .post("/user/id", id)
            .then((response) => {
              localStorage.removeItem("ID");
              localStorage.removeItem("Loging");
              setShowRemove(false);
              window.location.replace("/");
            })
            .catch((error) => console.log(error));
        }
        else{
            alert("취소");
            setOnPopupPW((current)=> !current);
            setShowRemove(false);
        }

    }

    const onChangeOld = (event) => {
        setOldInputV(event.target.value);
    };
    const onChange = (event) => {
        setInputV(event.target.value);
    };
    const onSubmitOld = async (event) => {
        event.preventDefault();
        if (oldInputV === "") {
          return;
        }
        const tempList = {
            id : id,
            password : oldInputV
        };
        await axios
        .post("/api/id/pw", tempList)
        .then((response) => {
        axios
        .get("/api/id/pw/user")
        .then((response) => {
          if (response.data.length !== 0)
          {
            alert("검증 확인");
            if (showRemove)
            {
              clickRemoveUser();
            }
            else{
              setShowUpdate(true);
            }
          }
          else{
            alert("비밀번호 불일치");
            setShowUpdate(false);
          }
        })
        .catch((error) => console.log(error));
        });
        setOldInputV("");
      };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (InputV === "") {
            alert("비밀번호는 8~12자리입니다");
            return;
        }
        if (InputV===password){
            alert("현재 비밀번호와 다른 비밀번호를 입력하세요");
            return;
        }
        const tempList = {
            id : id,
            password : InputV
        };
        await axios
        .post("/api/user/pw", tempList)
        .then((response) => {
            alert("비밀번호 변경 완료");
            setOnPopupPW((current)=> !current);
            parentFunction(tempList);
        })
        .catch((error) => {
            console.log(error);
        });
        setInputV("");
    };
    const changePW =() => {
        setOnPopupPW((current)=> !current);
        if (!onPopupPW){
            setShowUpdate(false);
        }
    }
    const removeUser =() => {
      setOnPopupPW((current)=> !current);
      setShowRemove(true);
      if (!onPopupPW){
          setShowUpdate(false);
      }
  }
  return (
    <div>
        <div className="close close3" onClick={onClick}></div>
        아이디
        <h1>{id}</h1>
        <br/>
        <br/>
        이름
        <h1>{name}</h1>
        <br/>
        <br/>
        비밀번호
        <h1>{passwordfilter}</h1>
        <Button text="비밀번호 수정" onClick={changePW}/>
        <br/>
        <br/>
        <Button text="탈퇴" onClick={removeUser}/>
        <Modal isOpen={onPopupPW} onRequestClose={changePW} ariaHideApp={false}>
        <InputValue
          value={InputV}
          oldValue={oldInputV}
          onChange={onChange}
          onChangeOld={onChangeOld}
          onSubmit={onSubmit}
          onSubmitOld ={onSubmitOld}
          showUpdate={showUpdate}
          showRemove={showRemove}
        ></InputValue>
        </Modal>

    </div>
  );
}

export default Popup;
