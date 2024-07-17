import React, { useState, useEffect } from "react";
import { fetchData } from "../../service/cabine";
import CabinaCard from "../../components/cabinaCard/CabinaCard";
import Modal from "../../components/modal/Modal";
import CabineForm from "../../components/cabineForm/CabineForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllCabines, storeAllCabines } from "../../store/cabineSlice";
import { availabilityOptions, sortOptions } from "../../constants/ui/options";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const cabines = useSelector(getAllCabines);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.cabineStore);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const closeModal = () => {
    setShow(false);
  };
  const [fetchParams, setFetchParams] = useState({
    available: "",
    sortOption: "",
  });

  const handleFetchParamsChange = (event) => {
    const { name, value } = event.target;
    setFetchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData(fetchParams);
      dispatch(storeAllCabines(data));
    };

    fetchDataAsync();
  }, [fetchParams]);

  return (
    <div className="mt-[50px]">
      <div className="flex justify-start gap-[30px] my-[30px]">
        <select
          name="available"
          onChange={handleFetchParamsChange}
          value={fetchParams.available}
        >
          {availabilityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          name="sortOption"
          onChange={handleFetchParamsChange}
          value={fetchParams.sortOption}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
