import { TbLogout, TbSettings } from "react-icons/tb";
import { ADMIN_NAV_ITEMS } from "../../constants";
import { NavLink } from "react-router-dom";

import logo from "../../assets/admin-class-notifier-logo.png";
import { useAuthStore } from "../../store/admin/authStore";
import { useAuth } from "../../hooks/admin/useAuth";

export default function AdminNav() {
  const { userData } = useAuthStore();
  const { logout } = useAuth();

  const navItemsElements = ADMIN_NAV_ITEMS.map((navItem) => {
    const Icon = navItem.icon;
    return (
      <NavLink
        end
        to={navItem.link}
        className={({ isActive }) =>
          `flex items-center text-xs p-2 px-2 gap-1 montserrat rounded-sm  ${
            isActive
              ? "bg-[#EFF8FF] text-[#175CD3] font-bold"
              : "hover:bg-black/5 text-gray-800 font-medium"
          }`
        }
      >
        <Icon />
        <p>{navItem.name}</p>
      </NavLink>
    );
  });

  return (
    <div className="flex flex-col justify-between w-[280px] p-2">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[105px] h-[81.3px]" />
        </div>
        {navItemsElements}
      </div>
      <div className="flex flex-col gap-4">
        <NavLink
          to={"settings"}
          className={({ isActive }) =>
            `flex items-center p-2 gap-1 text-xs rounded-sm montserrat ${
              isActive
                ? "bg-[#EFF8FF] text-[#175CD3] font-bold"
                : "hover:bg-black/5 text-gray-800 font-medium"
            }`
          }
        >
          <TbSettings />
          <p>Settings</p>
        </NavLink>
        <hr className="border border-gray-300" />
        <div className="flex items-center gap-3">
          <div className="flex items-center p-1 px-2 gap-2 rounded-sm">
            <div className="size-[50px] rounded-full bg-black/15" />
            <div className="flex flex-col">
              <p className="font-medium poppins">{userData?.name}</p>
              <p className="montserrat text-[10px]">{userData?.email}</p>
            </div>
          </div>
          <p
            className="p-1.5 rounded-md hover:bg-black/10 cursor-pointer"
            onClick={() => logout()}
          >
            <TbLogout size={30} />
          </p>
        </div>
      </div>
    </div>
  );
}
