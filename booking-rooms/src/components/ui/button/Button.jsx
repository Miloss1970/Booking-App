import React from "react";

const Button = ({ onClick, className, text }) => {
  return (
    <button onClick={onClick} className={` ${className} mb-1`}>
      {text}
    </button>
  );
};

export default Button;
