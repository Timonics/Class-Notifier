import { create } from "zustand";
import { StudentAuthState } from "../../interfaces/student/auth.interfaces";

export const useStudentAuthStore = create<StudentAuthState>((set) => ({
    studentIsAuthenticated: false,
    setStudentIsAuthenticated: (value: boolean) => set({studentIsAuthenticated: value}),
    studentAuthIsLoading: false,
    setStudentAuthIsLoading: (value: boolean) => set({studentAuthIsLoading: value}),
    studentToken: null,
    setStudentToken: (value: string) => set({studentToken: value})
}));
