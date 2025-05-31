import axios from "axios";
import { AdminLoginData, ResetEmail } from "../types/auth";
import { LoginResponse } from "../interfaces/auth.interfaces";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../utils/toast";
import { useLoadingStore } from "../store/loadingStore";

const useAuth = () => {
  const navigate = useNavigate();
  const dbUrl = "https://api.classnotifier.com.ng/api/admin/";
  const { setAdminIsAuthenticated, setUserData } =
    useAuthStore();
  const {setIsLoading} = useLoadingStore()

  const adminLogin = async (adminLoginData: AdminLoginData): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}login`, adminLoginData);
      const loginResponse = response.data as LoginResponse;
      setUserData(loginResponse.user);
      setAdminIsAuthenticated(true);
      setIsLoading(false);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
      alert("Error Logging in");
    }
  };

  //const adminSignup = () => {}

  const resetPassword = async (resetEmail: ResetEmail): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${dbUrl}request-resettoken`,
        resetEmail
      );
      const resetPasswordResponse: string = response.data;
      setIsLoading(false)
      showSuccess(resetPasswordResponse);
      navigate(`/admin/auth/forgot-password/verify-email`);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
      alert("Error resetting password");
    }
  };

  return {
    adminLogin,
    resetPassword,
  };
};

export { useAuth };
