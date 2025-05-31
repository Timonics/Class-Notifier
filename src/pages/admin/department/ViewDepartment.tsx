import { TbX, TbEdit } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { useEffect } from "react";
import { useDepartment } from "../../../hooks/useDepartment";

export default function ViewDepartment({
  departmentId,
  departmentName,
}: {
  departmentId: string | number;
  departmentName: string;
}) {
  const { getDepartment } = useDepartment();

  useEffect(() => {
    getDepartment(Number(departmentId));
  }, []);
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
        <p className="poppins font-semibold text-lg">{departmentName}</p>
      </div>
      ;
    </div>
  );
}
