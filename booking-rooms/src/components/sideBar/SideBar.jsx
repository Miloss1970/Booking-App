import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-64 bg-white flex flex-col border-r-2 border-primary">
      <div className="h-[60px] bg-primary flex items-center justify-center">
        <span className="text-white font-bold">Menu</span>
      </div>
      <div className="flex flex-col mt-4">
        <Link to="/rooms" className="py-2 px-4 hover:bg-gray-200">
          Rooms
        </Link>

        <Link to="/booking" className="py-2 px-4 hover:bg-gray-200">
          Booking
        </Link>
        <Link to="/user" className="py-2 px-4 hover:bg-gray-200">
          User
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
