import { useStudentAuthStore } from "../../store/student/studentAuthStore";

export const useClass = () => {
  const dbUrl = import.meta.env.VITE_DB_URL;
  const { studentToken } = useStudentAuthStore();

  const addClass = async () => {};

  return {};
};
