import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalCotext } from "../context/Context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalCotext();
  return (
    <>
      <div
        className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}
        onClick={closeModal}
      >
        <div className="modal-container">
          <h3>Modal Content</h3>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
