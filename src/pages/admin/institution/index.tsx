import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbAnchor, TbSearch } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { institutionType } from "../../../constants/institutionType";
import { useInstitutionStore } from "../../../store/admin/institutionStore";

export default function Institution() {
  const { setInstitutionSearchTerm, setFilterSelected, institutionSearchTerm } =
    useInstitutionStore();
  const [institutionTypeIsOpen, setInstitutionTypeIsOpen] = useState(false);
  const [selectedInstitutionType, setSelectedInstitutionType] = useState("");

  const navElements = institutionType.map((item) => (
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
        Institution
      </h1>
      <div className="flex gap-2 items-center text-xs">{navElements}</div>
      <hr className="border border-gray-300" />
      <div className="mt-5 flex p-4 gap-4 rounded-xl items-center w-full bg-gray-100">
        <div className="space-y-1 w-3/5">
          <p className="text-[13px] text-[#344054] font-semibold">
            Search for Institution
          </p>
          <div className="flex items-center gap-1 pl-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] poppins bg-white">
            <TbSearch className="h-full w-[20px] text-sm text-black/30" />
            <input
              placeholder="Search"
              className="w-full pr-4 h-[40px] outline-none placeholder:text-sm placeholder:font-medium"
              name="institutionSearchTerm"
              value={institutionSearchTerm!}
              onChange={(event) => setInstitutionSearchTerm(event.target.value)}
            />
          </div>
        </div>
        <div className="space-y-1 w-2/5 ">
          <p className="text-[13px] text-[#344054] font-semibold">
            Institution Type
          </p>
          <div className="flex items-center gap-2">
            <div
              className="h-[40px] rounded-lg bg-white border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-[65%]"
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
                  {institutionType.map((institution) => (
                    <li
                      className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                      onClick={() => {
                        setSelectedInstitutionType(institution.name);
                        setFilterSelected(institution.name);
                      }}
                    >
                      {institution.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex bg-green-500 gap-2 rounded-full items-center py-2 px-1 poppins justify-center text-white w-[35%]">
              <TbAnchor />
              <p className="text-[10px] font-medium">Download CSV</p>
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
