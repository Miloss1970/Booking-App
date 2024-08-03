import React from "react";

const DropDownMenu = ({ children, closeDropDown }) => {
  return (
    <div>
      <div
        onClick={closeDropDown}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-0"
      ></div>
      <div className="absolute w-[100px] h-[70px] bg-gray-200 top-[-50px] rounded-lg p-2 right-[-75px] z-20">
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
