import { useState } from "react";
import VaccineModal from "./VaccineModal";

const VaccineCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div
      className="bg-slate-100 p-4 rounded-md shadow-md cursor-pointer"
      onClick={openModal}
    >
      <div className="flex gap-4 items-center">
        <img
          src="./vaccineavatar.png"
          alt="Vaccine Avatar"
          className="h-20 w-20"
        />
        <h2>Vaccine {data.name}</h2>
      </div>
      {showModal && (
        <VaccineModal vaccine={data} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default VaccineCard;
