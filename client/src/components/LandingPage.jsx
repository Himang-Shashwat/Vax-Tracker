import { useState } from 'react';
import GoalsBlock from './GoalsBlock.jsx';

export default function LandingPage() {
  const [images, setImages] = useState([
    'https://www.livemint.com/lm-img/img/2023/11/20/600x338/im-889104_1700470117935_1700470233555.jpg',
    'https://images.unsplash.com/photo-1632053001332-2268cc09f738?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1606619788401-85dd53e9c8be?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610621349380-3e55db314fa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1576765608622-067973a79f53?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesPerPage = 5;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          <span className="text-slate-500">Vax</span>
          <span className="text-slate-700">Tracker</span>
        </h1>
        <p className="text-gray-600 text-italic text-center">
          Protecting tiny hearts, one vaccine at a time.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 mt-4">
          {images
            .slice(currentImageIndex, currentImageIndex + imagesPerPage)
            .map((image, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
        </div>
        <GoalsBlock />
      </div>
    </div>
  );
}
