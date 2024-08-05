import React, { useState } from "react";

import Modal from "../modal/Modal";
import CabineForm from "../cabineForm/CabineForm";
import DropDownMenu from "../ui/dropDownMenu/DropDownMenu";
import Button from "../ui/button/Button";

const CabinaCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const closeDropDown = () => {
    setShow(false);
  };

  return (
    <div className="py-[10px] px-[10px] relative mt-[20px]   w-full gap-5 flex h-[200px] mb-5 shadow-md shadow-gray-400 rounded-md">
      <div className="flex-[40%]">
        <img
          src={data.image}
          className="object-cover w-full h-full rounded-md"
          alt=""
        />
      </div>
      <div className="flex-[60%]">
        <div className="flex justify-between">
          <h2 className="font-bold text-primary text-[18px]">{data.name}</h2>
          <p
            onClick={() => setShow(true)}
            className="text-gray-600 font-bold tracking-wide cursor-pointer"
          >
            ...
          </p>
        </div>
        <p className="my-2 text-gray-500">
          {data.description.slice(0, 150)}...
        </p>
        <p className="text-primary font-bold mb-3">{data.regularPrice}$</p>
        <button className="py-1 px-3 bg-primary text-[13px]  text-white rounded-lg">
          DETAILS
        </button>
      </div>
      {show ? (
        <DropDownMenu closeDropDown={closeDropDown}>
          <Button
            onClick={handleOpenModal}
            className="drop-btn-primary mt-1"
            text="Edit"
          />
          <Button className="drop-btn-red" text="Delete" />
        </DropDownMenu>
      ) : null}
      <Modal show={openModal} closeModal={closeModal}>
        <CabineForm cabineToEdit={data} id={data.id} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default CabinaCard;
