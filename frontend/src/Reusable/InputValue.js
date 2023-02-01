import React from "react";
import Button from "./Button";
function InputValue({ value, onSubmit, onChange,oldValue, onSubmitOld, onChangeOld, showUpdate, showRemove }) {
  return (
    <div>
      {!showUpdate &&   
      <form onSubmit={onSubmitOld}>
        <h3>현재 비밀번호를 입력 하세요</h3>
        <input
          value={oldValue}
          onChange={onChangeOld}
          type="password"
          placeholder="password..."
          name="password"
          minLength='8'
          maxLength='12'
          size="14"
        />
        <Button text="확인" type="submit"/>
      </form>
      }
      {!showRemove && showUpdate &&       
      <form onSubmit={onSubmit}>
        <h3>수정할 비밀번호를 입력 하세요</h3>
        <input
          value={value}
          onChange={onChange}
          type="password"
          placeholder="password..."
          name="password"
          minLength='8'
          maxLength='12'
          size="14"
        />
        <Button text="변경" type="submit"/>
      </form>}
    </div>
  );
}

export default InputValue;
