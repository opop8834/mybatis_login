import React from "react";
function LoginEmployee({ value, onSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value.id}
          onChange={onChange}
          type="text"
          placeholder="id..."
          name="id"
          size="8"
        />
        <br></br>
        <input
          value={value.password}
          onChange={onChange}
          type="password"
          placeholder="password..."
          name="password"
          minLength='8'
          maxLength='12'
          size="14"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginEmployee;
