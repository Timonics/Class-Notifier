import { Outlet } from "react-router-dom";
import AdminNav from "../../components/admin-nav";

export default function AdminDashboardLayout() {
  return (
    <div className="h-screen border-2 flex gap-2">
      <AdminNav />
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
