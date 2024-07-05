import React from "react";

const CabinaCard = ({ data }) => {
  return (
    <div className="py-[10px] px-[10px]  max-w-max gap-5 flex h-[200px] mb-5 shadow-md shadow-gray-400 rounded-md">
      <div className="flex-[40%]">
        <img
          src={data.image}
          className="object-cover w-full h-full rounded-md"
          alt=""
        />
      </div>
      <div className="flex-[60%]">
        <h2 className="font-bold text-orange-600 text-[18px]">{data.name}</h2>
        <p className="my-2 text-gray-500">
          {data.description.slice(0, 150)}...
        </p>
        <p className="text-orange-600 font-bold mb-3">{data.regularPrice}$</p>
        <button className="py-1 px-3 bg-orange-600 text-[13px]  text-white rounded-lg">
          DETAILS
        </button>
      </div>
    </div>
  );
};

export default CabinaCard;
