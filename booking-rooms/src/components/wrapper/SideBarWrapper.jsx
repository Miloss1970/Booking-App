import React from "react";
import Sidebar from "../sideBar/SideBar";
const SidebarWrapper = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-[30%]">
        <Sidebar />
      </div>
      <div className="flex-[70%] p-4">{children}</div>
    </div>
  );
};

export default SidebarWrapper;
