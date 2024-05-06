import { useState } from "react";
import ChildModal from "./ChildModal";

const ChildCard = ({ data, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const formattedDateOfBirth = new Date(data.dateOfBirth).toLocaleDateString();

  return (
    <div
      className="bg-slate-100 p-4 rounded-md shadow-md hover:cursor-pointer"
      onClick={() => setShowModal(true)}
    >
      <div className="flex gap-4 items-center">
        <img
          className="w-24 h-24 rounded-md"
          src={data.gender === "male" ? "./boyavatar.jpg" : "./girlavatar.jpg"}
          alt="Child avatar"
        />
        <div>
          <h2>Name: {data.name}</h2>
          <p>Date of Birth: {formattedDateOfBirth}</p>
        </div>
      </div>
      {showModal && (
        <ChildModal
          child={data}
          onClose={() => setShowModal(false)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default ChildCard;
