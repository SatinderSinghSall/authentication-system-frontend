import API_URL from "../config/api";

const apis = () => {
  const list = {
    registerUser: `${API_URL}/user/register`,
    loginUser: `${API_URL}/user/login`,
  };

  return list;
};

export default apis;
