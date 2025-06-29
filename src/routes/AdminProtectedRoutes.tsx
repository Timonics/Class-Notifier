import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/admin/authStore";

export const AdminProtectedRoute = () => {
  const { adminIsAuthenticated } = useAuthStore();
  return adminIsAuthenticated ? <Outlet /> : <Navigate to={"admin/auth"} />;
};

export const AdminRedirectRoute = () => {
  const { adminIsAuthenticated } = useAuthStore();
  return adminIsAuthenticated ? <Navigate to={"admin/"} /> : <Outlet />;
};
