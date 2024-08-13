import React from "react";
import { Link } from "react-router-dom";

const colors = {
  red: "bg-red-600",
  primary: "bg-orange-600",
  green: "bg-green-600",
  gray: "bg-gray-400",
  blue: "bg-blue-400",
};

const Button = ({ onClick, color, name, text, to, disabled }) => {
  const baseClass = `text-[14px] text-white rounded-md cursor-pointer hover:opacity-70 transition-all duration-300`;

  const drop = `py-0.5 px-[5px] font-bold w-full ${baseClass}`;
  const detail = `px-4 py-2 ${baseClass}`;

  const className = name === "drop" ? drop : detail;
  const colorClass = colors[color] || "";

  if (to)
    return (
      <Link to={to} className={`${className} ${colorClass} mb-1`}>
        {text}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${colorClass} mb-1`}
    >
      {text}
    </button>
  );
};

export default Button;
