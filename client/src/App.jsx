import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot-password';
import RegistrationPage from './pages/auth/register';
import Navbar from './pages/Home/navbar'; 
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;