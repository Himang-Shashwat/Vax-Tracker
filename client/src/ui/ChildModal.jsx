import { AiOutlineClose } from 'react-icons/ai';
import {
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineIdentification,
} from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function ChildModal({ child, onClose, onUpdate }) {
  const childId = child._id.slice(-6).toUpperCase();
  console.log(child);

  const handleClick = () => {
    axios
      .patch(`http://localhost:3000/api/v1/immunizations/${child._id}`, data, {
        withCredentials: true,
      })
      .then((data) => {
        onClose();
        onUpdate();
        toast.success('Immunization record updated successfully');
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[400px] max-w-full bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="mb-5 w-fit px-4 py-1 bg-red-300 rounded-lg">
          {child.name}
        </h2>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineIdentification className="text-red-300 text-2xl" />
          <h2 className="my-1">{childId}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineUser className="text-red-300 text-2xl" />
          <h2 className="my-1">
            {new Date(child.dateOfBirth).toLocaleDateString()}
          </h2>
        </div>
        <Link
          to={`/children/details/${child._id}`}
          className="bg-slate-500 mt-2 mb-1 p-3 rounded-lg w-full text-center"
        >
          Get Details
        </Link>
      </div>
    </div>
  );
}
