import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { updateBookingField } from "../../../service/booking";

const statusActions = {
  "checked-in": "Check out",
  unconfirmed: "Check in",
  "checked-out": null,
};

const DetailsButtons = ({ status, booking }) => {
  const action = statusActions[status];

  const navigate = useNavigate();

  const handleAction = async () => {
    if (action === "Check out") {
      try {
        await updateBookingField(booking.id, "status", "checked-out");
      } catch (error) {
        console.log(error);
      }
    } else if (action === "Check in") {
      navigate(`/check-in/${booking.id}`);
    }
  };

  return (
    <div className="flex gap-3 mt-3">
      {action && (
        <Button
          text={action}
          color="primary"
          name="details"
          onClick={handleAction}
        />
      )}
      <Button text="Delete booking" color="red" name="details" />
      <Button text="Back" color="blue" name="details" to="/booking" />
    </div>
  );
};

export default DetailsButtons;
