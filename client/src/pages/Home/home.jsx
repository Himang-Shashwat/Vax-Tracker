import Navbar from './navbar';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />

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
