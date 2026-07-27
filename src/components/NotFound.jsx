import React from "react";
import { Button } from "@mui/material";
import { TbError404 } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <TbError404 className="error-icon" />

        <h1>404</h1>

        <h3>Oops! Page Not Found</h3>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Button
          variant="contained"
          size="large"
          startIcon={<FaArrowLeft />}
          onClick={() => navigate("/login")}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
