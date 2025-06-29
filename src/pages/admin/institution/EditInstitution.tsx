import { TbX, TbHome } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { useEffect } from "react";
import { useInstitution } from "../../../hooks/admin/useInstitution";

export default function EditInstitution({
  institutionId,
}: {
  institutionId: number;
}) {
  const { editInstitution } = useInstitution();

  useEffect(() => {
    editInstitution(institutionId, { institutionType: "" });
  }, []);

  return (
    <div
      className={`w-[400px] overflow-auto p-4 rounded-lg bg-white shadow-2xl flex flex-col gap-4 relative`}
    >
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX size={20} className="ml-auto cursor-pointer" />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbHome className="text-[#344054]" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Edit Institution</p>
      </div>
    </div>
  );
}
