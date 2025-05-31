import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbCalendar, TbSearch } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { classType } from "../../../constants/classType";

export default function ClassManagement() {
  const [institutionTypeIsOpen, setInstitutionTypeIsOpen] = useState(false);
  const [selectedInstitutionType, setSelectedInstitutionType] = useState("");
  const navElements = classType.map((item) => (
    <NavLink
      end
      to={item.link}
      className={({ isActive }) =>
        `text-xs ${
          isActive
            ? "font-bold montserrat text-blue-600 bg-blue-50"
            : "font-medium text-gray-500"
        } px-2 p-1 rounded-sm`
      }
    >
      {item.name}
    </NavLink>
  ));

  return (
    <div className="flex flex-col p-4 gap-6 mt-5">
      <h1 className="text-3xl poppins font-semibold text-gray-950">
        Class Management
      </h1>
      <div className="flex gap-2 items-center text-xs">{navElements}</div>
      <hr className="border border-gray-300" />
      <div className="mt-5 flex p-4 gap-4 rounded-xl items-center w-full bg-gray-100">
        <div className="space-y-1 w-[30%]">
          <p className="text-[13px] text-[#344054] font-semibold">
            Search for Course
          </p>
          <div className="flex items-center gap-1 pl-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] poppins bg-white">
            <TbSearch className="h-full w-[20px] text-sm text-black/30" />
            <input
              placeholder="Search"
              className="w-[150px] xl:w-[170px] h-[40px] outline-none placeholder:text-sm placeholder:font-medium"
            />
          </div>
        </div>
        <div className="w-[70%] flex gap-4">
          <div className="w-1/3 space-y-1">
            <p className="text-[13px] text-[#344054] font-semibold">
              Institution Name
            </p>
            <div className="flex items-center gap-2">
              <div
                className="h-[40px] rounded-lg bg-white border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
                onClick={() => setInstitutionTypeIsOpen(!institutionTypeIsOpen)}
              >
                <p className="text-xs font-medium text-[#101828]">
                  {selectedInstitutionType
                    ? selectedInstitutionType
                    : "--select institution type--"}
                </p>
                <MdKeyboardArrowDown className="absolute right-2" />
                {institutionTypeIsOpen && (
                  <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg shadow-2xl">
                    {classType.map((type) => (
                      <li
                        className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                        onClick={() => {
                          setSelectedInstitutionType(type.name);
                        }}
                      >
                        {type.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-1 w-1/3">
            <p className="text-[13px] text-[#344054] font-semibold">
              Department
            </p>
            <div
              className="h-[40px] rounded-lg bg-white border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
              onClick={() => setInstitutionTypeIsOpen(!institutionTypeIsOpen)}
            >
              <p className="text-xs font-medium text-[#101828] text-nowrap">
                {selectedInstitutionType
                  ? selectedInstitutionType
                  : "--select institution type--"}
              </p>
              <MdKeyboardArrowDown className="absolute right-2" />
              {institutionTypeIsOpen && (
                <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg shadow-2xl">
                  {classType.map((type) => (
                    <li
                      className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                      onClick={() => {
                        setSelectedInstitutionType(type.name);
                      }}
                    >
                      {type.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="space-y-1 w-1/3">
            <p className="text-[13px] text-[#344054] font-semibold">
              Date
            </p>
            <div className="flex items-center gap-2 pl-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] poppins bg-white">
              <TbCalendar className="h-full w-[20px] text-sm text-black/30" />
              <input
                placeholder="Select Date"
                className="w-[150px] xl:w-[170px] h-[40px] outline-none placeholder:text-sm placeholder:font-medium"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
}
