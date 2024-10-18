import React from "react";
import "../css/button.css";

const Button = ({ onClick }) => {
  return (
    <button className="random" onClick={onClick}>
      RANDOM
    </button>
  );
};

export default Button;
