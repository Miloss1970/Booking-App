import React from "react";
import Button from "../button/Button";

const statusActions = {
  "checked-in": "Check out",
  unconfirmed: "Check in",
  "checked-out": null,
};

const DetailsButtons = ({ status }) => {
  const action = statusActions[status];

  return (
    <div className="flex gap-3 mt-3">
      {action && <Button text={action} color="primary" name="details" />}
      <Button text="Delete booking" color="red" name="details" />
      <Button text="Back" color="gray" name="details" />
    </div>
  );
};

export default DetailsButtons;
