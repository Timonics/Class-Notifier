import { TbHome, TbTrash, TbX } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { ChangeEvent, useEffect, useState } from "react";
import { useInstitutionStore } from "../../../store/admin/institutionStore";
import { useInstitution } from "../../../hooks/admin/useInstitution";
import { useLoadingStore } from "../../../store/admin/loadingStore";
import Loader from "../../../components/loader";
import { useDepartment } from "../../../hooks/admin/useDepartment";

export default function CreateNewDepartment({
  departmentIsOpened,
}: {
  departmentIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isLoading } = useLoadingStore();
  const { institutionData } = useInstitutionStore();
  const { getInstitutions } = useInstitution();
  const { addDepartment } = useDepartment();
  const [institutionIsSelectedId, setInstitutionIsSelectedId] = useState({
    id: 0,
  });
  const [newDepartmentData, setNewDepartmentData] = useState({
    name: "",
    institution_id: 0,
  });

  useEffect(() => {
    getInstitutions();
  }, []);

  const facultyElements = institutionData.map((institution) => (
    <div
      className="flex border border-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-[#9B51E0] cursor-pointer"
      style={{
        backgroundColor:
          institutionIsSelectedId.id == institution.id ? "#9B51E0" : "",
        color: institutionIsSelectedId.id == institution.id ? "#fff" : "",
      }}
      onClick={() => {
        setInstitutionIsSelectedId({ id: institution.id });
        setNewDepartmentData((prevState) => ({
          ...prevState,
          institution_id: institution.id,
        }));
      }}
    >
      <TbTrash />
      <p className="text-[10px] font-medium">{institution.name}</p>
    </div>
  ));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewDepartmentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-[400px] p-4 rounded-lg bg-white shadow-2xl flex flex-col gap-4 relative overflow-hidden z-50">
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX
          size={20}
          className="ml-auto cursor-pointer"
          onClick={() => departmentIsOpened(false)}
        />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbHome className="text-[#344054]" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Create Department</p>
      </div>

      <div className="flex flex-col gap-2 mt-5 montserrat text-sm font-medium z-20">
        <div className="flex gap-2">
          {isLoading ? (
            <div className="flex flex-col w-full text-center">
              <div className=" relative h-[40px]">
                <Loader />
              </div>
              <p className="poppins text-xs font-medium text-black/7-">
                Loading Institutions...
              </p>
            </div>
          ) : institutionData.length === 0 ? (
            <p className="text-[10px] font-medium text-red-600">
              Select Institution
            </p>
          ) : (
            <div className="flex items-center gap-2">{facultyElements}</div>
          )}
        </div>
        <input
          placeholder="Enter new department"
          className="h-[40px] border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium pl-2 rounded-lg mt-4 text-sm"
          name="name"
          value={newDepartmentData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <button
          className="flex disabled:bg-[#9B51E0]/50 bg-[#9B51E0] disabled:cursor-not-allowed gap-1 rounded-full items-center p-2 poppins justify-center text-white w-1/2"
          onClick={() => addDepartment(newDepartmentData)}
        >
          <TbTrash />
          <p className="text-[10px] font-medium">Publish</p>
        </button>
      </div>
    </div>
  );
}
