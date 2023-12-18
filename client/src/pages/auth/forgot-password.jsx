import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Function to handle sending OTP and changing the view
  const handleSendOtp = () => {
    //Backend Implementation needed

    setIsOtpSent(true);
  };

  // Function to handle OTP verification and password change
  const handleVerifyOtp = () => {
    //Logic Implementation remaining.
    setIsOtpVerified(true);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

      {/* Display user email and password confirmation after OTP is verified */}
      {isOtpVerified ? (
        <div>
          <p className="text-lg font-semibold mb-4">{`Email: ${email}`}</p>

          {/* Password input fields */}
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="mt-1 p-2 border rounded-md w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded-md w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Password match error message */}
            {newPassword !== confirmPassword && (
              <p className="text-red-500 mt-2">Password does not match.</p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="mt-4 bg-blue-500 text-white p-2 rounded-md"
            onClick={handleSendOtp}
          >
            Send OTP
          </button>

          {/* OTP input and verify OTP button */}
          {isOtpSent && !isOtpVerified && (
            <div className="mt-4">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                className="mt-1 p-2 border rounded-md w-full"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded-md"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
