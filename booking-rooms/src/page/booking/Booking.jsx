import React, { useEffect, useState } from "react";
import TableHead from "../../components/table/TableHead";
import TableBody from "../../components/table/TableBody";
import { bookingSort, statusOptions } from "../../constants/ui/options";
import SelectInput from "../../components/ui/selectInput/SelectInput";
import { useBooking } from "../../hooks";
import load from "../../utills/images/load.gif";
import { getAllBookings } from "../../store/bookingSlice";
import { useSelector } from "react-redux";
const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [fetchParams, setFetchParams] = useState({
    status: "All",
    sortOptions: "",
  });
  const booking = useSelector(getAllBookings);

  useBooking(fetchParams, setLoading);

  const handleStatus = (status) => {
    setFetchParams((prev) => ({
      ...prev,
      status: status,
    }));
  };

  const handleBookingSort = (event) => {
    setFetchParams((prev) => ({
      ...prev,
      sortOptions: event.target.value,
    }));
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center my-4">
        <h2 className="mb-4 font-bold text-[22px]">All Booking</h2>

        <div className="flex items-center gap-3">
          {statusOptions.map((status) => (
            <p
              key={status}
              onClick={() => handleStatus(status)}
              className={`cursor-pointer ${
                fetchParams.status === status
                  ? "text-primary font-bold"
                  : "text-gray-500"
              }`}
            >
              {status}
            </p>
          ))}

          <SelectInput
            options={bookingSort}
            value={fetchParams.sortOptions}
            onChange={handleBookingSort}
          />
        </div>
      </div>

      {loading ? (
        <table className="w-full bg-white border border-gray-400 rounded-full text-[14px]">
          <TableHead />
          <tbody>
            {booking?.map((booking) => (
              <TableBody key={booking.id} booking={booking} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center">
          <img src={load} className="h-[100px] w-[100px]" alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Booking;
