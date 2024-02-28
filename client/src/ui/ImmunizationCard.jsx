import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImmunizationModal from "./ImmunizationModal";

const ImmunizationCard = ({ data, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  if (!data || !data.vaccineId || !data.childId) {
    return <p>Error: Missing required data in immunization record.</p>;
  }

  const scheduledDate = data.administrationDate
    ? new Date(data.administrationDate).toLocaleDateString()
    : "";

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div
      className="bg-slate-100 p-4 rounded-md shadow-md"
      onClick={() => setShowModal(true)}
    >
      <h2>Name: {data.childId.name}</h2>
      <p>Vaccine: {data.vaccineId.name}</p>
      <p>Scheduled Date: {scheduledDate}</p>
      <p>
        Current Status:{" "}
        {data.currentStatus.replace(/^./, (match) => match.toUpperCase())}
      </p>
      {showModal && (
        <ImmunizationModal
          immunization={data}
          onClose={() => setShowModal(false)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default ImmunizationCard;
