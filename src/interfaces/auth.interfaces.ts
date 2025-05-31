import { ResetEmail } from "../types/auth";
import { User } from "./user.interfaces";

export interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  adminIsAuthenticated: boolean;
  setAdminIsAuthenticated: (value: boolean) => void;
  userData: User | null;
  setUserData: (value: User) => void;
  passwordResetEmail: ResetEmail | null;
  setPasswordResetEmail: (value: ResetEmail) => void;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
    token: string;
  };
}
