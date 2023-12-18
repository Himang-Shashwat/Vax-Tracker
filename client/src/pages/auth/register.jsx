import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration Data:', formData);
  };

  return (
    <div className="registration-container p-4 bg-gray-100 flex justify-center items-center h-screen">
      <div className="max-w-[400px] w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4">Vaccination Tracker Registration</h2>
        <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;
