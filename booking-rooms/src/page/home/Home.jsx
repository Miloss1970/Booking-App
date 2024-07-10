import React, { useState, useEffect } from "react";
import { fetchData } from "../../service/cabine";
import CabinaCard from "../../components/cabinaCard/CabinaCard";
import Modal from "../../components/modal/Modal";
import CabineForm from "../../components/cabineForm/CabineForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllCabines, storeAllCabines } from "../../store/cabineSlice";

const Home = () => {
  const [show, setShow] = useState(false);
  const cabines = useSelector(getAllCabines);
  const dispatch = useDispatch();

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
    <div>
      <div className="flex justify-end gap-[30px] my-[30px]">
        <select
          name="available"
          onChange={handleFetchParamsChange}
          value={fetchParams.available}
        >
          <option value="">Filter by</option>
          <option value="all">All</option>
          <option value="available">Available</option>
        </select>
        <select
          name="sortOption"
          onChange={handleFetchParamsChange}
          value={fetchParams.sortOption}
        >
          <option value="">Sort by</option>
          <option value="nameAsc">Name A-Z</option>
          <option value="nameDesc">Name Z-A</option>
          <option value="priceAsc">Price Low to High</option>
          <option value="priceDesc">Price High to Low</option>
        </select>
      </div>
      {cabines?.map((cabine) => (
        <CabinaCard key={cabine.id} data={cabine} />
      ))}
      <button
        onClick={() => setShow(true)}
        className="py-2 px-4 bg-orange-600 text-white hover:opacity-[0.7] rounded-lg transition-all duration-300"
      >
        Add Room
      </button>
      <Modal show={show} closeModal={setShow}>
        <CabineForm />
      </Modal>
    </div>
  );
};

export default Home;
