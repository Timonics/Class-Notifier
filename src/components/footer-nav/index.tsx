import { NavLink } from "react-router-dom";
import { NAV_iTEMS } from "../../constants";

export default function FooterNav() {
  const navELements = NAV_iTEMS.map((item, index) => (
    <NavLink
      to={item.link}
      className={({ isActive }) => `${index === 2 && "-rotate-[25deg]"} cursor-pointer ${isActive && "transition ease-in-out scale-125"}`}
    >
      {item.icon && <item.icon />}
    </NavLink>
  ));

  return (
    <div className="h-[41px] fixed bg-[#32073F] bottom-0 w-full flex justify-around items-center text-white text-xl">
      {navELements}
    </div>
  );
}
