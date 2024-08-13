import React from "react";
import { useParams } from "react-router-dom";

import DetailsButtons from "../../components/ui/detailsButtons/DetailsButtons";
import { getStatusClasses } from "../../utills/helpers";
import BookingDetailsCard from "../../components/bookingDetailsCard/BookingDetailsCard";
import { useSelector } from "react-redux";
import { getSingleBooking } from "../../store/bookingSlice";

const DetailBooking = () => {
  const { id } = useParams();

  const booking = useSelector((state) => getSingleBooking(state, id));
  return (
    <div className="mt-[50px]">
      <div className="flex gap-3 items-center mb-[20px]">
        <h2 className="text-[22px] font-bold">Booking #{booking.id}</h2>
        <span
          className={`px-2 py-0.5 rounded-xl bg-gray-300 text-[12px] ${getStatusClasses(
            booking.status
          )}`}
        >
          {booking.status}
        </span>
      </div>
      <BookingDetailsCard booking={booking} />
      <div className="flex justify-end">
        <DetailsButtons status={booking.status} booking={booking} />
      </div>
    </div>
  );
};

export default DetailBooking;
