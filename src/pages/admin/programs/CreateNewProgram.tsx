import { TbHome, TbTrash, TbX } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { useProgramStore } from "../../../store/admin/programStore";
import { ChangeEvent, useEffect, useState } from "react";
import { useDepartment } from "../../../hooks/admin/useDepartment";
import { useProgram } from "../../../hooks/admin/useProgram";
import { useDepartmentStore } from "../../../store/admin/departmentStore";
import { FaSpinner } from "react-icons/fa";
import { useLoadingStore } from "../../../store/admin/loadingStore";
import { RiSendPlaneFill } from "react-icons/ri";

export default function CreateNewProgram({
  newProgramIsOpen,
}: {
  newProgramIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { getDepartments, getDepartment } = useDepartment();
  const { isLoading } = useLoadingStore();
  const { programData } = useProgramStore();
  const { departmentData, department } = useDepartmentStore();
  const { addProgram } = useProgram();
  const [departmentIsSelectedId, setDepartmentIsSelectedId] = useState({
    id: 0,
  });
  const [newProgramData, setNewProgramData] = useState({
    name: "",
    department_id: 0,
    institution_id: 0,
  });
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    getDepartments();
  }, []);

  useEffect(() => {
    if (departmentIsSelectedId.id === 0) return;
    getDepartment(departmentIsSelectedId.id);
    if (department) {
      setNewProgramData((prevState) => ({
        ...prevState,
        institution_id: department.institution_id,
      }));
    }
  }, [departmentIsSelectedId.id]);

  const departmentElements = departmentData.map((item) => (
    <div
      className="flex border border-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-[#9B51E0] cursor-pointer text-nowrap"
      style={{
        backgroundColor: departmentIsSelectedId.id == item.id ? "#9B51E0" : "",
        color: departmentIsSelectedId.id == item.id ? "#fff" : "",
      }}
      onClick={() => {
        setDepartmentIsSelectedId({ id: item.id });
        setNewProgramData((prevState) => ({
          ...prevState,
          department_id: item.id,
        }));
      }}
    >
      <TbTrash />
      <p className="text-[10px] font-medium">{item.name}</p>
    </div>
  ));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProgramData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-[400px] p-4 rounded-lg bg-white shadow-2xl flex flex-col gap-4 relative overflow-hidden">
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX
          size={20}
          className="ml-auto cursor-pointer size-[45px] rounded-full p-2 hover:bg-black/10"
          onClick={() => newProgramIsOpen(false)}
        />
        <div className="size-[40px] absolute top-13 border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbHome className="text-[#344054]" size={25} />
        </div>
        <p className="poppins font-semibold text-lg mt-15">Create Program</p>
      </div>
      <div className="z-10 mt-4">
        <p className="text-xs font-medium text-gray-600">
          Select Department for the new program
        </p>
      </div>
      <div className="flex flex-col gap-2 montserrat text-sm font-medium z-20">
        <div className="flex gap-2">
          {programData.length === 0 ? (
            <p className="text-[10px] font-medium text-red-600">
              Department must be added before proceeding...
            </p>
          ) : (
            <div className="flex items-center gap-2 overflow-x-auto">
              {departmentElements}
            </div>
          )}
        </div>
        {departmentIsSelectedId.id === 0 && (
          <div className="text-center text-red-500 text-xs mt-4">
            Please select a department before proceeding
          </div>
        )}
        {isLoading && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs">Loading institution's department...</p>
            <FaSpinner className="animate-spin text-[#9B51E0]" size={20} />
          </div>
        )}
        <input
          disabled={!department}
          placeholder={"Enter new program"}
          name="name"
          value={newProgramData.name}
          onChange={handleChange}
          className="h-[40px] disabled:cursor-not-allowed border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium pl-2 rounded-lg mt-4 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <button
          disabled={
            programData.length == 0 ||
            !newProgramData.name ||
            newProgramData.department_id <= 0
          }
          className="cursor-pointer flex disabled:bg-[#9B51E0]/50 disabled:cursor-not-allowed bg-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-white w-1/2 relative"
        >
          <RiSendPlaneFill />
          <p
            className="text-[10px] font-medium"
            onClick={() => {
              setSubmitClicked(true);
              addProgram(newProgramData);
            }}
          >
            Publish
          </p>
          {submitClicked && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/50">
              <FaSpinner className="animate-spin text-[#9B51E0]" size={20} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
