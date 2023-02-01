import { useState,useEffect } from 'react';
import Button from '../Reusable/Button';
import axios from 'axios';
import Modal from 'react-modal';
import Popup from './Popup';

function DBprofile() {
    const [currentID, setCurrentID] = useState("");
    const [currentPW, setCurrentPW] = useState("");
    const [currentPWfilter, setCurrentPWfilter] = useState("");
    const [currentName, setCurrentName] = useState("");
    const [showing, setShowing] = useState(false);
    const onClick = () => {
      setShowing((current) => !current);
    };
    const parentFunction = (v) => {   // 비밀번호 수정하면 즉시 랜더링에 반영
        const pwLength = v.password.length;
        let pwStr = "";
        for (let i =0 ; i<pwLength ; i++)
        {
            pwStr = pwStr + "*";
        }
        setCurrentPW(v.password);
        setCurrentPWfilter(pwStr);
    }
    const setUser = (Input) => {
        const v = Input;
        const pwLength = v.password.length;
        let pwStr = "";
        for (let i =0 ; i<pwLength ; i++)
        {
            pwStr = pwStr + "*";
        }
        setCurrentID(v.id);
        setCurrentName(v.name);
        setCurrentPW(v.password);
        setCurrentPWfilter(pwStr);
    }
    useEffect(() => {
        const loginID = localStorage.getItem("ID");
        axios
        .post("/api/user/information/id", loginID)
        .then((response) => {
            axios
            .get("/api/user/information/all")
            .then((response) => {
              if (response.data.length !== 0)
              {
                setUser(response.data[0]);
              }
              else{
                console.log("no User");
              }
            })
        });
      }, []);
    return (
        <div>
            <Modal isOpen={showing} onRequestClose={onClick} ariaHideApp={false}>
                <Popup id={currentID} name={currentName} password={currentPW} passwordfilter={currentPWfilter} onClick={onClick} parentFunction={parentFunction}/>
            </Modal>
            <br/>
            <br/>
            <Button text='프로필 수정' onClick={onClick}/>
        </div>
    );
}

export default DBprofile;