import "./pages/auth.css";

import AppNavbar from "./components/AppNavbar";
import ScrollTopButton from "./components/ScrollTopButton";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import OTPVerify from "./pages/OTPVerify";
import UpdatePassword from "./pages/UpdatePassword";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <AppNavbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/otp/verify" element={<OTPVerify />} />
        <Route path="/password/update" element={<UpdatePassword />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollTopButton />
    </>
  );
}

export default App;
