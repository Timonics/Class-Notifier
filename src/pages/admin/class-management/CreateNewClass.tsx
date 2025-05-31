import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  TbCalendar,
  TbClock,
  TbHome,
  TbPlus,
  TbTrash,
  TbX,
} from "react-icons/tb";
import { institutionType } from "../../../constants/institutionType";
import Ripple from "../../../components/ripple";

export default function CreateClass() {
  const [institutionTypeIsOpen, setInstitutionTypeIsOpen] = useState(false);
  const [selectedInstitutionType, setSelectedInstitutionType] = useState("");
  return (
    <div
      className="w-[400px] h-full overflow-auto p-4 rounded-lg bg-white shadow-2xl flex flex-col gap-4 relative"
      onClick={() => {
        if (institutionTypeIsOpen) setInstitutionTypeIsOpen(false);
      }}
    >
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX size={20} className="ml-auto" />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbHome className="text-[#344054]" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Create a new Class</p>
      </div>
      <div className="flex flex-col gap-4 z-20">
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">
            Select Institution
          </p>
          <div
            className="h-[40px] rounded-lg bg-white border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
            onClick={() => setInstitutionTypeIsOpen(!institutionTypeIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedInstitutionType
                ? selectedInstitutionType
                : "--Select institution for this course--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {institutionTypeIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg shadow-2xl">
                {institutionType.map((institution) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                    onClick={() => {
                      setSelectedInstitutionType(institution.name);
                    }}
                  >
                    {institution.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">
            Select Department
          </p>
          <div
            className="h-[40px] rounded-lg bg-white border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
            onClick={() => setInstitutionTypeIsOpen(!institutionTypeIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedInstitutionType
                ? selectedInstitutionType
                : "--Select department--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {institutionTypeIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg shadow-2xl">
                {institutionType.map((institution) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                    onClick={() => {
                      setSelectedInstitutionType(institution.name);
                    }}
                  >
                    {institution.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">
            Select Program
          </p>
          <div
            className="h-[40px] rounded-lg bg-white border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
            onClick={() => setInstitutionTypeIsOpen(!institutionTypeIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedInstitutionType
                ? selectedInstitutionType
                : "--Select program--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {institutionTypeIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg shadow-2xl">
                {institutionType.map((institution) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                    onClick={() => {
                      setSelectedInstitutionType(institution.name);
                    }}
                  >
                    {institution.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-5 montserrat text-sm font-medium">
        <h1>Create/Select Department</h1>
        <div className="flex gap-2 flex-wrap">
          <div className="flex bg-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-white">
            <TbTrash />
            <p className="text-[10px] font-medium">
              LIBS 837 Project Management | Dr Haruna Awa
            </p>
          </div>
          <div className="flex border border-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-[#9B51E0]">
            <TbPlus />
            <p className="text-[10px] font-medium">Add New</p>
          </div>
        </div>
        <div className="space-y-1 mt-4">
          <p className="text-[10px] text-[#EB5757] font-semibold">
            Enter course, ensure you pick the one with the right lecturer
          </p>
          <input
            placeholder="| e.g LIBS 830 Information Consulting | Dr Haruna Awa"
            className="h-[40px] border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium px-2 rounded-lg text-sm w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-7 montserrat text-sm font-medium">
        <h1>Date & Time</h1>
        <div className="flex gap-2">
          <div className="flex border text-[#9B51E0] border-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center">
            <TbCalendar />
            <p className="text-[10px] font-medium">Pick a date</p>
          </div>
          <div className="flex border text-[#9B51E0] border-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center">
            <TbClock />
            <p className="text-[10px] font-medium">Pick time</p>
          </div>
        </div>
        <div className="space-y-1 mt-4">
          <p className="text-[10px] font-semibold">
            Enter class / meeting link
          </p>
          <input
            placeholder="https://meet.google.com/atc-03ed-43e"
            className="h-[40px] border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium px-2 rounded-lg text-sm w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <div className="flex bg-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-white w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Publish</p>
        </div>
      </div>
    </div>
  );
}
