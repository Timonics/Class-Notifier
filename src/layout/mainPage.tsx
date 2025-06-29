import { Navigate, Outlet } from "react-router-dom";
import Nav from "../components/nav";
import FooterNav from "../components/footer-nav";
import { useStudentAuthStore } from "../store/student/studentAuthStore";

export default function MainPageLayout() {
  const { studentIsAuthenticated } = useStudentAuthStore();

  return studentIsAuthenticated ? (
    <div className="p-4 max-w-lg max-sm:w-full mx-auto min-h-screen flex flex-col items-center gap-5">
      <div className="w-full">
        <Nav />
      </div>
      <Outlet />
      <FooterNav />
    </div>
  ) : (
    <Navigate to={"/auth"} />
  );
}
