import { Navigate, Outlet } from "react-router-dom";
import classes from "./index.module.css";
import { useStudentAuthStore } from "../../store/student/studentAuthStore";

export default function OnboardingLayout() {
  const { studentIsAuthenticated } = useStudentAuthStore();

  return studentIsAuthenticated ? (
    <Navigate to={"/classes"} />
  ) : (
    <div className={`${classes.container} max-w-lg mx-auto max-sm:w-full`}>
      <Outlet />
    </div>
  );
}
