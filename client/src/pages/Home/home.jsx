import Navbar from './navbar';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='flex bg-blue-800 text-white mt-2 text-2xl font-bold rounded-lg'>
        <h2 className='ml-2'>Vaccinate Your Children</h2>
      </div>

      <div className='flex'>
        <div className='m-6 size-5/12 '>
          <img className="rounded-lg" src="\src\assets\happy-family.png" alt="Happy Family" />
        </div>
        <div className=' card-body flex-1 p-6'>
          <div className='shadow-2xl rounded-lg bg-gray-200'>
            <h1 className='text-2xl font-bold items-center flex justify-center shadow-xl rounded-lg '>Why Vaccinate?</h1>
            <h6 className='text-m m-2'>Vaccinating children is crucial for disease prevention,
            community immunity, and reducing disease spread. It protects against serious illnesses,
            prevents complications, and safeguards future generations. By vaccinating,
            we ensure individual and community health, preventing outbreaks and maintaining overall well-being.</h6>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Baby Vaccine Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {/* Vaccine Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Vaccine 1</h2>
            <p className="text-gray-700">Polio Vaccine.</p>
          </div>

          {/* Vaccine Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Vaccine 2</h2>
            <p className="text-gray-700"></p>
          </div>

          {/* Vaccine Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Vaccine 3</h2>
            <p className="text-gray-700">
              Description of Vaccine 3 for babies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
