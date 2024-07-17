import React, { useState } from "react";
import Sidebar from "../sideBar/SideBar";
import { useSelector } from "react-redux";
const SidebarWrapper = ({ children }) => {
  const { user } = useSelector((state) => state.cabineStore);
  const [showMenu, setShowMenu] = useState(false);

  const showHideMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="flex">
      <div className="flex-[20%]">
        <Sidebar />
      </div>
      <div className="flex-[80%] px-[80px]">{children}</div>

      {showMenu ? (
        <div className="absolute top-[65px] right-[70px] bg-gray-400 rounded-md w-[90px] h-[60px]"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SidebarWrapper;
