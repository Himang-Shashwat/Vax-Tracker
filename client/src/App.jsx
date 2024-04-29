import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/authentication/SignIn';
import SignUp from './pages/authentication/SignUp';
import Profile from './pages/authentication/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import ChangePassword from './pages/authentication/ChangePassword';
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/ResetPassword';
import Vaccines from './pages/vaccines/Vaccines';
import Children from './pages/children/Children';
import ShowChild from './pages/children/ShowChild';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:resetToken"
            element={<ResetPassword />}
          />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/children" element={<Children />} />
            <Route path="/children/details/:id" element={<ShowChild />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#ffffff',
            color: '#374151',
          },
        }}
      ></Toaster>
    </>
  );
}

export default App;
