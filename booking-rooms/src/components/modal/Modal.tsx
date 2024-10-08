import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, closeModal, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);
  if (!show) return null;

  function close() {
    closeModal(false);
  }
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        onClick={close}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30"
      ></div>

      <div className="relative z-[40] bg-white  rounded-lg">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
