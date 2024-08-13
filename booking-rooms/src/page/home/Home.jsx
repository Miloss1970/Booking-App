import React, { useState, useEffect } from "react";
import CabinaCard from "../../components/cabinaCard/CabinaCard";
import Modal from "../../components/modal/Modal";
import CabineForm from "../../components/cabineForm/CabineForm";
import { useSelector } from "react-redux";
import { getAllCabines } from "../../store/cabineSlice";
import { availabilityOptions, sortOptions } from "../../constants/ui/options";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../components/ui/selectInput/SelectInput";
import { useRooms } from "../../hooks";

const Home = () => {
  const [show, setShow] = useState(false);
  const cabines = useSelector(getAllCabines);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.cabineStore);
  const [fetchParams, setFetchParams] = useState({
    available: "",
    sortOption: "",
  });

  useRooms(fetchParams);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const closeModal = () => {
    setShow(false);
  };

  const handleFetchParamsChange = (event) => {
    const { name, value } = event.target;
    setFetchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-[50px]">
      <div className="flex justify-start gap-[30px] my-[30px]">
        <SelectInput
          name="available"
          options={availabilityOptions}
          value={fetchParams.available}
          onChange={handleFetchParamsChange}
        />
        <SelectInput
          name="sortOption"
          options={sortOptions}
          value={fetchParams.sortOption}
          onChange={handleFetchParamsChange}
        />
      </div>
      {cabines?.map((cabine) => (
        <CabinaCard key={cabine.id} data={cabine} />
      ))}
      <button
        onClick={() => setShow(true)}
        className="py-2 px-4 bg-primary text-white hover:opacity-[0.7] rounded-lg transition-all duration-300"
      >
        Add Room
      </button>
      <Modal show={show} closeModal={setShow}>
        <CabineForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Home;
