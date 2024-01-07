import { useState } from "react";
import { Modal } from "./";

const Button = ({ buttonLabel }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button 
    className="flex gap-2 text-white text-lg leading-normal font-poppins wide:mr-24 bg-primary p-3 px-7 rounded hover:bg-secondary transition duration-300 ease-in-out"
    type="button"
    onClick={() => {
      setShowModal(true);
  }}
>
        {buttonLabel}
    </button>
    {showModal && <Modal setOpenModal={setShowModal} />}

    </>
    
  )
}

export default Button