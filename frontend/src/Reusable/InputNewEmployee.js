import React from "react";
function InputNewEmployee({ value, onSubmit, onChange }) {
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
          value={value.name}
          onChange={onChange}
          type="text"
          placeholder="name..."
          name="name"
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
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default InputNewEmployee;
