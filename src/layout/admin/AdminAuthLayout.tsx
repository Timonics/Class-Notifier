import { Outlet } from "react-router-dom";

export default function AdminAuthLayout() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="shadow-2xl rounded-lg border-[#344054]/30 flex flex-col gap-10 p-4 py-6 w-[420px]"><Outlet /></div>
    </div>
  );
}
