import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBooking } from "../../store/bookingSlice";
import BookingDetailsCard from "../../components/bookingDetailsCard/BookingDetailsCard";
import { fetchSettings, updateBookingField } from "../../service/booking";
import Button from "../../components/ui/button/Button";

const CheckIn = () => {
  const [settings, setSettings] = useState({});
  const [actions, setActions] = useState({
    hasBreakfast: false,
    isPaid: false,
    loading: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const booking = useSelector((state) => getSingleBooking(state, id));

  useEffect(() => {
    fetchSettings().then((res) => setSettings(res[0]));
  }, []);

  const handleAction = async (type, field, value) => {
    setActions((prevState) => ({ ...prevState, loading: true }));

    try {
      if (type === "checkbox") {
        await updateBookingField(id, field, value);
        setActions((prevState) => ({ ...prevState, [field]: value }));
        return;
      }

      if (type === "checkin") {
        await updateBookingField(id, "status", "checked-in");
        navigate(`/booking`);
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setActions((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return (
    <div>
      <h2 className="my-[20px] text-[30px] font-bold">
        Check in booking #{booking.id}
      </h2>
      <BookingDetailsCard booking={booking} />
      <div className="flex gap-2 p-3 bg-gray-100 rounded-md items-center my-4 text-[14px] text-gray-600">
        <input
          type="checkbox"
          className="h-[15px] w-[15px]"
          checked={actions.hasBreakfast}
          onChange={(e) =>
            handleAction("checkbox", "hasBreakfast", e.target.checked)
          }
          disabled={actions.loading}
        />
        <p>Do you want to add breakfast for ${settings?.breakfast}?</p>
      </div>
      <div className="flex gap-2 p-3 bg-gray-100 rounded-md items-center my-4 text-[14px] text-gray-600">
        <input
          type="checkbox"
          className="h-[15px] w-[15px]"
          checked={actions.isPaid}
          onChange={(e) => handleAction("checkbox", "isPaid", e.target.checked)}
          disabled={actions.loading}
        />
        <p>
          I confirmed that {booking.guests.full_name} paid the total amount of $
          {booking.totalPrice}.
        </p>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          text={`Check in booking #${booking.id}`}
          color={actions.isPaid ? "primary" : "gray"}
          name="details"
          onClick={() => handleAction("checkin")}
          disabled={actions.loading || !actions.isPaid}
        />
        <Button text="Back" color="blue" name="details" to="/booking" />
      </div>
    </div>
  );
};

export default CheckIn;
