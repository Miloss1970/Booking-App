import React, { useState, useEffect } from "react";
import { fetchData } from "../../service/cabine";
import CabinaCard from "../../components/cabinaCard/CabinaCard";

const Home = () => {
  const [cabines, setCabines] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setCabines(res));
  }, []);

  return (
    <div className="px-[100px]">
      {cabines?.map((cabine) => (
        <CabinaCard key={cabine.id} data={cabine} />
      ))}
      <button className="py-2 px-4 bg-orange-600 text-white hover:opacity-[0.7] rounded-lg transition-all duration-300">
        Add Room
      </button>
    </div>
  );
};

export default Home;
