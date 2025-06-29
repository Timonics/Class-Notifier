import { ChangeEvent, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbHome, TbTrash, TbX } from "react-icons/tb";
import { institutionType } from "../../../constants/institutionType";
import Ripple from "../../../components/ripple";
import { useInstitution } from "../../../hooks/admin/useInstitution";
import Loader from "../../../components/loader";
import { useLoadingStore } from "../../../store/admin/loadingStore";

export default function CreateNewInstitution({
  institutionIsOpened,
}: {
  institutionIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isLoading } = useLoadingStore();
  const { addInstitution } = useInstitution();
  const [institutionName, setInstitutionName] = useState({
    name: "",
  });

  const [institutionTypeIsOpen, setInstitutionTypeIsOpen] = useState(false);
  const [selectedInstitutionType, setSelectedInstitutionType] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInstitutionName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`w-[400px] ${
        institutionTypeIsOpen && "min-h-[430px]"
      } overflow-auto p-4 rounded-lg bg-white shadow-2xl flex flex-col gap-4 relative`}
      onClick={() => {
        if (institutionTypeIsOpen) setInstitutionTypeIsOpen(false);
      }}
    >
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX
          size={20}
          className="ml-auto cursor-pointer"
          onClick={() => institutionIsOpened(false)}
        />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbHome className="text-[#344054]" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Create Institution</p>
      </div>
      <div className="flex flex-col gap-4 z-20">
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">
            Institution Name
          </p>
          <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] poppins bg-white">
            {/* <TbSearch className="h-full w-[20px] text-sm text-black/30" /> */}
            <input
              placeholder="Enter Institution name"
              className="w-full h-[40px] outline-none placeholder:text-sm placeholder:font-medium"
              name="name"
              value={institutionName.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">
            Institution Type
          </p>
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
                {institutionType.slice(1).map((institution) => (
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
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <button
          disabled={!institutionName.name && !selectedInstitutionType}
          className="flex bg-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-white w-1/2 cursor-pointer disabled:bg-[#9B51E0]/50 disabled:cursor-not-allowed"
          onClick={() => addInstitution(institutionName)}
        >
          <TbTrash />
          <p className="text-[10px] font-medium">Publish</p>
        </button>
      </div>
      {isLoading && <Loader />}
    </div>
  );
}
