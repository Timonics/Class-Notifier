export interface StudentAuthState {
  studentIsAuthenticated: boolean;
  setStudentIsAuthenticated: (value: boolean) => void;
  studentAuthIsLoading: boolean;
  setStudentAuthIsLoading: (value: boolean) => void;
  studentToken: string | null;
  setStudentToken: (value: string) => void;
}

export interface StudentDetails {
  id: number;
  name: string;
  email: string;
  telegram_id: string;
  password: string;
  isVerified: boolean;
  updatedAt: string;
  createdAt: string;
  phone_number: null;
  gender: null;
  institution_id: null;
  department_id: null;
  program_id: null;
  resetToken: null;
  resetTokenExpiry: null;
}

export interface StudentLogin {
  email: string;
  password: string;
}

export interface StudentSignIn {
  name: string;
  email: string;
  password: string;
}

export interface StudentLoginResponse {
  success: boolean;
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
    token: string;
  };
}

export interface StudentSignUpResponse {
  message: string;
  student: StudentDetails;
}
