import React from "react";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user } = useSelector((state) => state.cabineStore);
  const getInitials = (fullName) => {
    if (fullName) {
      return fullName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();
    }
  };

  return (
    <nav className="col-start-2 row-start-1 h-[60px]  bg-white px-[80px] flex justify-between items-center">
      <div className="w-[40px] h-[40px] cursor-pointer rounded-full bg-primary text-white flex justify-center items-center text-[20px] font-bold">
        <p>{getInitials(user?.full_name)}</p>
      </div>
      <div>
        <p className="text-primary font-bold flex items-center gap-3 text-[18px] cursor-pointer">
          <MdLogout /> log out
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
