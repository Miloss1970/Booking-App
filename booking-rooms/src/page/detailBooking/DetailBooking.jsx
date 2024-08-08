import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingeBookig } from "../../service/booking";
import { differenceInDays } from "date-fns";

import DetailsButtons from "../../components/ui/detailsButtons/DetailsButtons";
import { getStatusClasses, monthsOrYears } from "../../utills/helpers";
import BookingDetailsCard from "../../components/bookingDetailsCard/BookingDetailsCard";

const DetailBooking = () => {
  const [booking, setBooking] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingeBookig(id).then((res) => setBooking(res));
  }, [id]);
  //update single field in table in supabase
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
        <DetailsButtons status={booking.status} />
      </div>
    </div>
  );
};

export default DetailBooking;
