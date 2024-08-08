import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format, differenceInDays, differenceInMonths } from "date-fns";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../ui/button/Button";
import DropDownMenu from "../ui/dropDownMenu/DropDownMenu";
import Td from "./Td";

const TableBody = ({ booking }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const startDate = new Date(booking.startDate);
  const endDate = new Date(booking.endDate);
  const days = differenceInDays(endDate, startDate);
  const monthsDifference = differenceInMonths(new Date(), startDate);
  console.log(booking);
  const closeDropDown = () => {
    setShow(false);
  };

  const getStatus = (status) => {
    return status === "checked-in" ? "check-out" : "check-in";
  };

  const getStatusClass = (status) => {
    return status === "checked-in" ? "red" : "green";
  };

  const handleNavigateToDetails = () => {
    navigate(`/detailsBooking/${booking.id}`);
  };

  return (
    <tr key={booking.id} className="text-start relative">
      <Td>{booking.cabines.name}</Td>
      <Td>
        <div>
          {booking.guests.full_name}
          <p className="text-gray-500">{booking.guests.email}</p>
        </div>
      </Td>
      <Td>
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
      </Td>
      <Td>
        <div>
          <p className="text-gray-500">{booking.status}</p>
        </div>
      </Td>
      <Td>
        ${" "}
        {booking.totalPrice.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Td>
      <Td>
        <div>
          <p
            className="text-gray-500 text-[18px] cursor-pointer"
            onClick={() => setShow(true)}
          >
            <BsThreeDotsVertical />
          </p>
        </div>
      </Td>
      {show ? (
        <DropDownMenu closeDropDown={closeDropDown}>
          <Button
            color={`${getStatusClass(booking.status)}`}
            text={getStatus(booking.status)}
            name="drop"
          />
          <Button
            color="primary"
            onClick={handleNavigateToDetails}
            text="details"
            name="drop"
          />
        </DropDownMenu>
      ) : null}
    </tr>
  );
};

export default TableBody;
