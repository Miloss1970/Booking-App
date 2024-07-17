import React from "react";
import Sidebar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] h-screen">
      <Sidebar className="row-span-2" />
      <NavBar />
      <main className="col-start-2 row-start-2 px-[80px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
