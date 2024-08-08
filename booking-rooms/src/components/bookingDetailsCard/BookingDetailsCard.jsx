import React from "react";
import { format, differenceInDays } from "date-fns";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { monthsOrYears } from "../../utills/helpers";

const BookingDetailsCard = ({ booking }) => {
  const days = differenceInDays(booking.endDate, booking.startDate);

  return (
    <div className="bg-gray-100 pb-2 rounded-md">
      <div className="flex justify-between h-[60px] items-center bg-primary text-white text-[16px] font-bold rounded-md">
        <p className="px-4">
          {days} nights in {booking?.cabines?.name}
        </p>
        {booking.startDate && (
          <p className="px-4">
            {`${format(booking?.startDate, "MMM dd yyyy")} (${monthsOrYears(
              booking
            )}) - ${format(booking?.endDate, "MMM dd yyyy")}`}
          </p>
        )}
      </div>

      <div className="px-4 text-[14px] text-gray-700">
        <div className="flex gap-3 items-center">
          <img
            className="w-[25px] h-[13px] object-cover"
            src={booking?.guests?.countryFlag}
            alt=""
          />
          <p className="my-4 flex gap-2 items-center">
            <b>{booking.guests?.full_name}</b> + {booking.numGuests - 1} guests
            -<span className="text-gray-500">{booking.guests?.email}</span>
          </p>
        </div>

        <p className="flex gap-2 items-center">
          <IoIosCheckmarkCircleOutline className="text-primary" />
          <b>Breakfast included?</b>
          <span>{booking.hasBreakfast ? " Yes" : " No"}</span>
        </p>

        <div
          className={`px-3 my-4 h-[60px] flex justify-between items-center ${
            booking.isPaid
              ? "bg-green-300 text-green-800"
              : "bg-orange-300 text-primary"
          } `}
        >
          <p className="flex gap-2 items-center">
            <MdOutlineMonetizationOn className="text-[18px]" />{" "}
            <b>Total price</b> ${booking.totalPrice}
          </p>
          <p className="font-bold">
            {booking.isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </div>

      <p className="text-right pr-4 text-[14px] text-gray-500">
        Booked Sun, Jun 16 2024, 11:26 AM
      </p>
    </div>
  );
};

export default BookingDetailsCard;
