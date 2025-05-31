import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className=" absolute inset-0 backdrop-blur-xs flex justify-center items-center">
      <CgSpinner size={35} className="animate-spin text-[#175CD3]" />
    </div>
  );
}
