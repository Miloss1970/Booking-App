import React from "react";

const InputComponent = ({
  label,
  type = "text",
  cabineToEdit,
  register,
  editType,
}) => {
  return (
    <div className="mt-1">
      {label && <label className="label">{label}</label>}
      <input
        type={type}
        defaultValue={cabineToEdit ? cabineToEdit[editType] || "" : ""}
        register
        className="input"
      />
    </div>
  );
};

export default InputComponent;
