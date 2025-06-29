import { RiLiveLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <button className="h-[40px] w-[80%] rounded-full relative bg-[#FF0404] flex items-center justify-center text-white montserrat gap-2 font-semibold disabled:bg-[#FF0404]/55">
        <p className="text-sm">Join ongoing class</p>
        <RiLiveLine className="-rotate-[25deg]" />
        <div className="border absolute top-0 left-1/2 -translate-x-1/2 -tranlate-y-1/2 h-[40px] rounded-full bg-[#FF0404]/30 animate-ping disabled:animate-none w-[70%]"></div>
      </button>
      <div className="h-[325px] w-full bg-[#32073F] rounded-[10px] flex flex-col items-center justify-center text-white p-4 gap-3">
        <p className="text-sm montserrat font-semibold">
          Your next class is scheduled for
        </p>
        <p className="border border-[#B884C8] bg-[#FAECFF] text-[#32073F] font-semibold montserrat flex items-center justify-center rounded-[10px] text-[13px] w-[260px] h-[28px]">
          Thursday 13th March 2025 | 03:30pm
        </p>
        <div className="h-[100px] w-[289px] border-y-[1.5px] border-[#B884C8C2] flex flex-col items-center justify-center gap-1">
          <p className="text-[24px] font-bold">LIBS 887</p>
          <p className="text-[17px] font-medium">Information Policies</p>
          <p className="text-[14px] font-bold montserrat"> - Dr Haruna Abu</p>
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="size-[76.6px] border-[3px] border-[#B884C899] rounded-[7px] bg-white text-[#8312A5] text-[32px] flex items-center justify-center">
              33
            </div>
            <p className="text-[#D9D9D9] text-sm">Hours</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-[76.6px] border-[3px] border-[#B884C899] rounded-[7px] bg-white text-[#8312A5] text-[32px] flex items-center justify-center">
              02
            </div>
            <p className="text-[#D9D9D9] text-sm">Minutes</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-[76.6px] border-[3px] border-[#B884C899] rounded-[7px] bg-white text-[#8312A5] text-[32px] flex items-center justify-center">
              55
            </div>
            <p className="text-[#D9D9D9] text-sm">Seconds</p>
          </div>
        </div>
      </div>
      <div className="bg-[#32073F1A] w-[90%] h-[71px] flex items-center justify-around gap-3">
        <NavLink
          to={"classes"}
          className={({ isActive }) =>
            `h-[37px] w-full ml-4 rounded-[5px] montserrat flex text-white font-medium text-sm items-center justify-center ${
              isActive ? "bg-[#32073F]" : "bg-[#32073FAB]"
            }`
          }
        >
          Classes
        </NavLink>
        <NavLink
          to={"exams"}
          className={({ isActive }) =>
            `h-[37px] w-full mr-4 rounded-[5px] montserrat flex text-white font-medium text-sm items-center justify-center ${
              isActive ? "bg-[#32073F]" : "bg-[#32073FAB]"
            }`
          }
        >
          Exams
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
