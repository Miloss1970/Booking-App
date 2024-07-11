import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "../modal/Modal";
import CabineForm from "../cabineForm/CabineForm";

const CabinaCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
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
        <div>
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-0"
          ></div>
          <div className="absolute w-[100px] h-[70px] bg-gray-200 top-[-50px] rounded-lg p-2 right-[-75px] z-20">
            <p
              onClick={() => setOpenModal(true)}
              className="flex gap-1 items-center cursor-pointer hover:opacity-[0.7]"
            >
              <span className="text-primary  font-bold">Edit</span> <MdEdit />
            </p>
            <p className="flex gap-1 items-center cursor-pointer hover:opacity-[0.7]">
              <span className="text-red-600  font-bold">Delete</span>{" "}
              <RiDeleteBinLine className="text-[20px]" />
            </p>
          </div>
        </div>
      ) : null}
      <Modal show={openModal} closeModal={closeModal}>
        <CabineForm cabineToEdit={data} id={data.id} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default CabinaCard;
