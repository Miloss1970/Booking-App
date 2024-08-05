import React from "react";

const SelectInput = ({ name, options, value, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="py-0.5 px-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
