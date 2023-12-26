import React, { useState } from 'react';

const Navbar = () => {
  // Assume isLoggedIn is a state representing the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-bold">VaxTracker</div>

        {/* Features or Auth Buttons based on authentication status */}
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <a href="#" className="text-white hover:text-gray-300">Feature 1</a>
              <a href="#" className="text-white hover:text-gray-300">Feature 2</a>
              {/* Add more features as needed */}
            </>
          ) : (
            <>
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300">About</a>
              <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
            </>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          {isLoggedIn ? (
            // Add logout functionality or other authenticated actions
            <a href="#" className="text-white hover:text-gray-300">Logout</a>
          ) : (
            <>
              <a href="#" className="text-white hover:text-gray-300">Login</a>
              <a href="#" className="text-white hover:text-gray-300">Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;