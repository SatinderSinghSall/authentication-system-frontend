import React from "react";
import { Button, Card, CardContent, Chip } from "@mui/material";
import { Login, PersonAdd, GitHub } from "@mui/icons-material";
import "./home.css";
import { useNavigate } from "react-router-dom";

const screenshots = [
  "/screenshots/Screenshot (5089).png",
  "/screenshots/Screenshot (5091).png",
  "/screenshots/Screenshot (5092).png",
  "/screenshots/Screenshot (5093).png",
  "/screenshots/Screenshot (5094).png",
  "/screenshots/Screenshot (5095).png",
  "/screenshots/Screenshot (5096).png",
  "/screenshots/Screenshot (5097).png",
  "/screenshots/Screenshot (5098).png",
  "/screenshots/Screenshot (5099).png",
];

const frontend = [
  "React",
  "Formik",
  "Yup",
  "Material UI",
  "React Router",
  "React Icons",
  "React Countdown",
];

const backend = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "JWT",
  "bcrypt",
  "Nodemailer",
  "REST API",
];

const features = [
  "User Registration",
  "Secure Login",
  "Forgot Password",
  "OTP Verification",
  "Password Reset",
  "User Profile",
  "Logout Confirmation",
  "Responsive UI",
  "Formik Validation",
  "Yup Validation",
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* HERO */}

      <section className="hero">
        <h1>Full-Stack Authentication System</h1>

        <p>
          A modern MERN Authentication System featuring secure login,
          registration, password recovery, OTP verification, protected routes
          and responsive user interface.
        </p>

        <div className="hero-buttons">
          <Button
            variant="contained"
            startIcon={<Login />}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            startIcon={<PersonAdd />}
            onClick={() => navigate("/register")}
          >
            Register
          </Button>

          <Button
            variant="text"
            startIcon={<GitHub />}
            href="https://github.com/SatinderSinghSall"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </section>

      {/* ABOUT */}

      <section className="section">
        <h2>About</h2>

        <p>
          This project demonstrates a complete authentication workflow built
          using the MERN Stack. The frontend is developed with React, Material
          UI, Formik and Yup while the backend will provide JWT Authentication,
          MongoDB integration, OTP verification, password recovery and secure
          APIs.
        </p>
      </section>

      {/* FEATURES */}

      <section className="section">
        <h2>Features</h2>

        <div className="features-grid">
          {features.map((item) => (
            <Card key={item}>
              <CardContent>{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TECH STACK */}

      <section className="section">
        <div className="tech-wrapper">
          <div className="tech-card">
            <h2>Frontend</h2>

            <div className="chips">
              {frontend.map((item) => (
                <Chip key={item} label={item} color="primary" />
              ))}
            </div>
          </div>

          <div className="tech-card">
            <h2>Backend</h2>

            <div className="chips">
              {backend.map((item) => (
                <Chip key={item} label={item} color="success" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}

      <section className="section">
        <h2>Application Preview</h2>

        <div className="gallery">
          {screenshots.map((image) => (
            <img
              key={image}
              src={image}
              alt="Authentication Screen"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        Built with ❤️ using React, Material UI, Formik, Yup, Express.js, MongoDB
        and JWT Authentication.
      </footer>
    </div>
  );
};

export default Home;
