import { useNavigate } from "react-router-dom";

const useGeneral = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToLogin = () => navigate("/login");
  const goToRegister = () => navigate("/register");
  const goToForgotPassword = () => navigate("/password/forgot");
  const goToResetPassword = () => navigate("/password/update");
  const goToProfile = () => navigate("/profile");
  const goBack = () => navigate(-1);

  return {
    navigate,
    goToHome,
    goToLogin,
    goToRegister,
    goToForgotPassword,
    goToResetPassword,
    goToProfile,
    goBack,
  };
};

export default useGeneral;
