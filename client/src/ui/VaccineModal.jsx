import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineClock, HiOutlineUser, HiOutlineIdentification } from 'react-icons/hi';

export default function VaccineModal({ vaccine, onClose }) {
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
          {vaccine.name}
        </h2>
        {/* <div className="flex justify-start items-center gap-x-2">
          <HiOutlineIdentification className="text-red-300 text-2xl" />
          <h2 className="my-1">{vaccine._id}</h2>
        </div> */}
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineClock className="text-red-300 text-2xl" />
          <h2 className="my-1"><h1 className='font-bold inline'>Importance:</h1> {vaccine.importance}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineUser className="text-red-300 text-2xl" />
          <h2 className="my-1"><h1 className='font-bold inline'>Side Effect:</h1> {vaccine.sideEffects}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <HiOutlineClock className="text-red-300 text-2xl" />
          <h2 className="my-1"><h1 className='font-bold'>Administration Age(in months):</h1> {vaccine.administrationAge.map(age => age + ' months').join(', ')}</h2>
        </div>
      </div>
    </div>
  );
}
