import React, { useEffect, useState } from "react";
import { fetchBooking } from "../../service/booking";
import TableHead from "../../components/table/TableHead";
import TableBody from "../../components/table/TableBody";
import { bookingSort, statusOptions } from "../../constants/ui/options";
import SelectInput from "../../components/ui/selectInput/SelectInput";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [fetchParams, setFetchParams] = useState({
    status: "All",
    sortOptions: "",
  });
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchBooking(fetchParams);
      setBooking(data);
    };

    fetchDataAsync();
  }, [fetchParams]);

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

        <div className="flex gap-3">
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
