import API_URL from "../config/api";

const apis = () => {
  const list = {
    registerUser: `${API_URL}/user/register`,
    loginUser: `${API_URL}/user/login`,
    profileUser: `${API_URL}/user/profile`,
    logoutUser: `${API_URL}/user/logout`,
    updateProfile: `${API_URL}/user/profile`,
  };

  return list;
};

export default apis;
