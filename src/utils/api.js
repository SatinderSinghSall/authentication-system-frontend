import API_URL from "../config/api";

const apis = () => {
  const list = {
    registerUser: `${API_URL}/user/register`,
  };

  return list;
};

export default apis;
