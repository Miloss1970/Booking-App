import React, { useState } from "react";
import { format, differenceInDays, differenceInMonths } from "date-fns";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../ui/button/Button";
import DropDownMenu from "../ui/dropDownMenu/DropDownMenu";

const TableBody = ({ booking, openSetting }) => {
  const [show, setShow] = useState(false);
  const startDate = new Date(booking.startDate);
  const endDate = new Date(booking.endDate);
  const days = differenceInDays(endDate, startDate);
  const amount = booking.cabines.regularPrice * days;
  const monthsDifference = differenceInMonths(new Date(), startDate);

  const closeDropDown = () => {
    setShow(false);
  };

  const getStatus = (status) => {
    return status === "checked-in" ? "checked-out" : "checked-in";
  };

  const getStatusClass = (status) => {
    return status === "checked-in" ? "drop-btn-red" : "drop-btn-green";
  };
  return (
    <tr key={booking.id} className="text-start relative">
      <td className="py-2 px-4 border-b text-left">{booking.cabines.name}</td>
      <td className="py-2 px-4 border-b text-left">
        <div>
          {booking.guests.full_name}
          <p className="text-gray-500">{booking.guests.email}</p>
        </div>
      </td>
      <td className="py-2 px-4 border-b text-left">
        <div className="flex flex-col items-start">
          <p className="text-gray-500">
            {monthsDifference} months ago &rarr;
            <span>{days} nights stay</span>
          </p>
          <p className="text-gray-500">
            {`${format(startDate, "MMM dd yyyy")} - ${format(
              endDate,
              "MMM dd yyyy"
            )}`}
          </p>
        </div>
      </td>

      <td className="py-2 px-4 border-b text-left">
        <div>
          <p className="text-gray-500">{booking.status}</p>
        </div>
      </td>

      <td className="py-2 px-4 border-b text-left">
        ${" "}
        {amount.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </td>
      <td className="py-2 px-4 border-b text-left">
        <div>
          <p
            className="text-gray-500 text-[18px] cursor-pointer"
            onClick={() => setShow(true)}
          >
            <BsThreeDotsVertical />
          </p>
        </div>
      </td>
      {show ? (
        <DropDownMenu closeDropDown={closeDropDown}>
          <Button
            className={`${getStatusClass(status)} w-full`}
            text={getStatus(status)}
          />
          <Button className="drop-btn-primary" text="details" />
        </DropDownMenu>
      ) : null}
    </tr>
  );
};

export default TableBody;
