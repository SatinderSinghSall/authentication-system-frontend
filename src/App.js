import "./components/auth.css";

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/NotFound";
import OTPVerify from "./components/OTPVerify";
import UpdatePassword from "./components/UpdatePassword";
import Profile from "./components/Profile";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/otp/verify" element={<OTPVerify />} />
      <Route path="/password/update" element={<UpdatePassword />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
