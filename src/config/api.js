const API_URL =
  process.env.REACT_APP_API_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://authentication-system-backend-cnaq.onrender.com");

export default API_URL;
