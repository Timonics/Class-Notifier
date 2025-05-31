import { create } from "zustand";
import { AuthState } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import { persist } from "zustand/middleware";
import { ResetEmail } from "../types/auth";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
      adminIsAuthenticated: false,
      setAdminIsAuthenticated: (value: boolean) =>
        set({ adminIsAuthenticated: value }),
      userData: null,
      setUserData: (value: User) => set({ userData: value }),
      passwordResetEmail: null,
      setPasswordResetEmail: (value: ResetEmail) =>
        set({ passwordResetEmail: value }),
    }),
    {
      name: "auth-storage",
    }
  )
);
