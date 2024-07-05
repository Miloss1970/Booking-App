import React, { useState, useEffect } from "react";
import { fetchData } from "../../service/cabine";
import CabinaCard from "../../components/cabinaCard/CabinaCard";
import Modal from "../../components/modal/Modal";
import CabineForm from "../../components/cabineForm/CabineForm";
import { RiArrowUpDownLine } from "react-icons/ri";

const Home = () => {
  const [cabines, setCabines] = useState([]);
  const [show, setShow] = useState(false);
  const [available, setAvailable] = useState(false);
  const [sortByName, setSortByName] = useState({
    name: false,
    nameDescending: false,
  });

  const [sortByPrice, setSortByPrice] = useState({
    priceme: false,
    priceDescending: false,
  });

  const nameSorting = () => {
    setSortByName({
      name: true,
      nameDescending: !sortByName.nameDescending,
    });
  };

  const priceSorting = () => {
    setSortByPrice({
      price: true,
      priceDescending: !sortByPrice.priceDescending,
    });
  };

  useEffect(() => {
    fetchData(available, sortByName, sortByPrice).then((res) => {
      console.log(res);
      setCabines(res);
    });
  }, [available, sortByName, sortByPrice]);

  return (
    <div className="px-[100px]">
      <div className="flex justify-end gap-[30px] mb-[100px]">
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={available}
            onChange={() => setAvailable(!available)}
          />
          Available
        </label>
        <p
          onClick={nameSorting}
          className="flex gap-2 items-center cursor-pointer"
        >
          Name <RiArrowUpDownLine />
        </p>
        <p
          onClick={priceSorting}
          className="flex gap-2 items-center cursor-pointer"
        >
          Price <RiArrowUpDownLine />
        </p>
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
