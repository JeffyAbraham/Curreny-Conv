import React from "react";
import "./custombutton.style.css";

const Button = (props) => {
  return (
    <div>
      <button className="custom-button-container">
        <span>{props.children}</span>
      </button>
    </div>
  );
};
export default Button;
