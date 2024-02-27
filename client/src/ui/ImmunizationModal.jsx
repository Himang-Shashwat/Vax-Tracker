import { AiOutlineClose } from "react-icons/ai";
import {
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineIdentification,
} from "react-icons/hi";
import { format } from "date-fns";

export default function ImmunizationModal({ immunization, onClose }) {
  const formattedDate = format(
    new Date(immunization.administrationDate),
    "dd-MM-yyyy"
  );

  const childId = immunization.childId._id.slice(-6).toUpperCase();

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[400px] max-w-full h-[225px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="mb-5 w-fit px-4 py-1 bg-red-300 rounded-lg">
          {immunization.vaccineId.name}
        </h2>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineIdentification className="text-red-300 text-2xl" />
          <h2 className="my-1">{childId}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineUser className="text-red-300 text-2xl" />
          <h2 className="my-1">{immunization.childId.name}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineClock className="text-red-300 text-2xl" />
          <h2 className="my-1">{formattedDate}</h2>
        </div>
        <button
          className="bg-slate-300 my-1 p-2 rounded-md"
          onClick={() => alert("Clicked")}
        >
          <span className="text-center">Mark Completed</span>
        </button>
      </div>
    </div>
  );
}
