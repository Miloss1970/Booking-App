import React from "react";
import Sidebar from "../sideBar/SideBar";
const SidebarWrapper = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-[20%]">
        <Sidebar />
      </div>
      <div className="flex-[80%] px-[80px]">{children}</div>
    </div>
  );
};

export default SidebarWrapper;
