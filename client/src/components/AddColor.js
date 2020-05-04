import React, { useRef } from "react";
import axiosWithAuth from "../axios";

export default function AddColor(props) {
  const colorNameRef = useRef();
  const colorHexRef = useRef();

  const submit = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/colors/", {
        color: colorNameRef.current.value,
        code: {
          hex: colorHexRef.current.value
        }
      })
      .then(res => {
        props.history.push("/api/colors");
      })
      .catch(error => {
        alert(error.response.data.error);
      });
  };

  return (
      <div className="add-color-form">
      <h1>Add Color:</h1>
      <div className="login-inputs">
        <input placeholder="color name" ref={colorNameRef} type="text" />
        <br />
        <input placeholder="color hex" ref={colorHexRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>Add Color</button>
      </div>
    </div>
  );
}