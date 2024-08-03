import React, { useEffect, useState } from "react";
import { fetchBooking } from "../../service/booking";
import TableHead from "../../components/table/TableHead";
import TableBody from "../../components/table/TableBody";
import { statusOptions } from "../../constants/ui/options";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetchBooking().then((res) => setBooking(res));
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between">
        <h2 className="mb-4 font-bold text-[22px]">All Booking</h2>

        <div className="flex gap-3">
          {statusOptions.map((filter) => (
            <p
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`cursor-pointer ${
                activeFilter === filter
                  ? "text-primary font-bold"
                  : "text-gray-500"
              }`}
            >
              {filter}
            </p>
          ))}
        </div>
      </div>

      <table className="w-full bg-white border border-gray-400 rounded-full text-[14px]">
        <TableHead />
        <tbody>
          {booking.map((booking) => (
            <TableBody booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
