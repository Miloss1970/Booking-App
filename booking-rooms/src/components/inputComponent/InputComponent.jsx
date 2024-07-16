import React from "react";

const InputComponent = ({
  label,
  type = "text",
  cabineToEdit,
  editType,
  register,
}) => {
  return (
    <div className="mt-1">
      {label && <label className="label">{label}</label>}
      <input
        type={type}
        defaultValue={cabineToEdit ? cabineToEdit[editType] || "" : ""}
        {...register(editType)}
        className="input"
      />
    </div>
  );
};

export default InputComponent;
