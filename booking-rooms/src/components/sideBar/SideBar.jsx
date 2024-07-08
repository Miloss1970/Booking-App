import React from "react";
import { Link } from "react-router-dom";
//users
const Sidebar = () => {
  return (
    <div className="fixed h-screen w-64 bg-white flex flex-col border-r-2 border-orange-600">
      <div className="h-14 bg-orange-600 flex items-center justify-center">
        <span className="text-white font-bold">Menu</span>
      </div>
      <div className="flex flex-col mt-4">
        <Link to="/" className="py-2 px-4 hover:bg-gray-200">
          Rooms
        </Link>
        <Link to="/booking" className="py-2 px-4 hover:bg-gray-200">
          Booking
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
