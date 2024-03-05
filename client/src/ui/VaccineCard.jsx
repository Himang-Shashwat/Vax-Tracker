import { useState } from 'react';
import VaccineModal from './VaccineModal';

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
      <h2>Vaccine Name: {data.name}</h2>
      {showModal && (
        <VaccineModal
          vaccine={data}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default VaccineCard;
