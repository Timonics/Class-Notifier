import { TbX, TbEdit, TbTrash } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { ChangeEvent, useState } from "react";
import { useDepartment } from "../../../hooks/useDepartment";
import Loading from "../../../components/loading";
import { useLoadingStore } from "../../../store/loadingStore";

export default function EditDepartment({
  departmentId,
}: {
  departmentId: number | string;
}) {
  const { isLoading } = useLoadingStore();
  const { editDepartment } = useDepartment();
  const [newDepartmentName, setNewDepartmentName] = useState({
    name: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewDepartmentName((prevState) => ({
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
          //onClick={() => departmentIsOpened(false)}
        />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbEdit className="text-blue-500" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Edit Department</p>
        <input
          placeholder="Enter new department"
          className="h-[40px] w-full border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium pl-2 rounded-lg mt-4 text-sm"
          name="name"
          value={newDepartmentName.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <button
          disabled={newDepartmentName.name === ""}
          className="flex disabled:bg-[#9B51E0]/50 bg-[#9B51E0] disabled:cursor-not-allowed gap-1 rounded-full items-center p-2 poppins justify-center cursor-pointer text-white w-1/2"
          onClick={() =>
            editDepartment(Number(departmentId), newDepartmentName)
          }
        >
          <TbTrash />
          <p className="text-[10px] font-medium">Publish</p>
        </button>
      </div>
      {isLoading && <div className="bg-black/30 z-30 absolute inset-0"><Loading /></div>}
    </div>
  );
}
