import { useState } from 'react';
import ChildModal from './ChildModal';

const ChildCard = ({ data, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const formattedDateOfBirth = new Date(data.dateOfBirth).toLocaleDateString();

  return (
    <div
      className="bg-slate-100 p-4 rounded-md shadow-md"
      onClick={() => setShowModal(true)}
    >
      <h2>Name: {data.name}</h2>
      <p>Date of Birth: {formattedDateOfBirth}</p>
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
