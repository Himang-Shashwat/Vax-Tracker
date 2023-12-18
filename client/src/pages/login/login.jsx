import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from './../../assets/vax.jpg';

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      {/* Image Section */}
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      {/* Login Form Section */}
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6">
          <h2 className="text-4xl font-bold text-center py-4">VaxTracker</h2>

          {/* Username Input */}
          <div className="flex flex-col py-2">
            <label className="text-sm">Username</label>
            <input className="border p-2" type="text" placeholder="Username" />
          </div>

          {/* Password Input */}
          <div className="flex flex-col py-2">
            <label className="text-sm">Password</label>
            <input className="border p-2" type="password" placeholder="Password" />
          </div>

          {/* Sign In Button */}
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>

          {/* Remember Me and Create Account Section */}
          <div className="flex justify-between">
            <label className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </label>
            <p>
              <Link to="/register" className="text-blue-500">Create an account</Link>
            </p>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
