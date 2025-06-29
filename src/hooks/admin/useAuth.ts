import axios from "axios";
import { AdminLoginData, ResetEmail } from "../../types/auth";
import { LoginResponse } from "../../interfaces/admin/auth.interfaces";
import { useAuthStore } from "../../store/admin/authStore";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../utils/toast";
import { useLoadingStore } from "../../store/admin/loadingStore";

const useAuth = () => {
  const navigate = useNavigate();
  const dbUrl: string = `${import.meta.env.VITE_DB_URL}admin/`
  const { setAdminIsAuthenticated, setUserData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();

  const adminLogin = async (adminLoginData: AdminLoginData): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}login`, adminLoginData);
      const loginResponse = response.data as LoginResponse;
      setUserData(loginResponse.user);
      showSuccess(loginResponse.message);
      setAdminIsAuthenticated(true);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      showError(err.message);
    }
  };

  const resetPassword = async (resetEmail: ResetEmail): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${dbUrl}request-resettoken`,
        resetEmail
      );
      const resetPasswordResponse: string = response.data;
      setIsLoading(false);
      showSuccess(resetPasswordResponse);
      navigate(`/admin/auth/forgot-password/verify-email`);
    } catch (err) {
      setIsLoading(false);
      showError("Error resetting password");
    }
  };

  const logout = () => {
    setAdminIsAuthenticated(false)
    localStorage.removeItem("auth-storage")
  }

  return {
    adminLogin,
    resetPassword,
    logout
  };
};

export { useAuth };
