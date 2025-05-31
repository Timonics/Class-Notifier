import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const ProtectedRoute = () => {
  const { adminIsAuthenticated } = useAuthStore();
  return adminIsAuthenticated ? <Outlet /> : <Navigate to={"admin/auth"} />;
};

export const RedirectRoute = () => {
  const { adminIsAuthenticated } = useAuthStore();
  return adminIsAuthenticated ? <Navigate to={"admin/"} /> : <Outlet />;
};
