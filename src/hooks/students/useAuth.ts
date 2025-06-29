import axios from "axios";
import {
  StudentLogin,
  StudentLoginResponse,
  StudentSignIn,
  StudentSignUpResponse,
} from "../../interfaces/student/auth.interfaces";
import { useStudentAuthStore } from "../../store/student/studentAuthStore";
import { showError, showSuccess } from "../../utils/toast";

export const useStudentAuth = () => {
  const dbUrl = import.meta.env.VITE_DB_URL;
  const {
    setStudentIsAuthenticated,
    setStudentToken,
    setStudentAuthIsLoading,
  } = useStudentAuthStore();

  const studentSignUp = async (studentSignInData: StudentSignIn) => {
    setStudentAuthIsLoading(true);
    try {
      await axios.post(
        `${dbUrl}verification/request-verification`,
        studentSignInData.email
      );

      const response = await axios.post(`${dbUrl}`, studentSignInData);

      const signupResponse = response.data as StudentSignUpResponse;

      showSuccess(signupResponse.message);
      studentLogin({
        email: studentSignInData.email,
        password: studentSignInData.password,
      });
      setStudentAuthIsLoading(false);
    } catch (err) {
      setStudentAuthIsLoading(false);
    }
  };

  const studentLogin = async (studentLoginData: StudentLogin) => {
    setStudentAuthIsLoading(true);
    try {
      const response = await axios.post(
        `${dbUrl}students/login`,
        studentLoginData
      );
      const loginResponse = response.data as StudentLoginResponse;

      setStudentIsAuthenticated(true);
      setStudentToken(loginResponse.user.token);
      showSuccess(loginResponse.message);
      setStudentAuthIsLoading(false);
    } catch (err) {
      showError("Error logging in");
      setStudentAuthIsLoading(false);
    }
  }; 

  return { studentLogin, studentSignUp };
};
