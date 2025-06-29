import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function ChangeProgram() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 w-full">
      <p className="poppins text-[22px] text-[#8312A5] text-center mx-auto w-72 mt-10">
        Change Institution/Program
      </p>
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px] text-[#8312A5]">Institution</p>
          <div className="relative border-[1.93px] border-[#CCCCCCCC] rounded-lg">
            <p className="absolute top-1/2 -translate-y-1/2 text-[#808080] pl-4 text-sm">
              --select Institution here
            </p>
            <div className="rounded-md w-full h-12 bg-[#FCFCFC] pl-4" />
            <MdKeyboardArrowDown
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px] text-[#8312A5]">Programme</p>
          <div className="relative border-[1.93px] border-[#CCCCCCCC] rounded-lg">
            <p className="absolute top-1/2 -translate-y-1/2 text-[#808080] pl-4 text-sm">
              Masters
            </p>
            <div className="rounded-md w-full h-12 bg-[#FCFCFC] pl-4" />
            <MdKeyboardArrowDown
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px] text-[#8312A5]">Faculty</p>
          <div className="relative border-[1.93px] border-[#CCCCCCCC] rounded-lg">
            <p className="absolute top-1/2 -translate-y-1/2 text-[#808080] pl-4 text-sm">
              Arts
            </p>
            <div className="rounded-md w-full h-12 bg-[#FCFCFC] pl-4" />
            <MdKeyboardArrowDown
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px] text-[#8312A5]">Department</p>
          <div className="relative border-[1.93px] border-[#CCCCCCCC] rounded-lg">
            <p className="absolute top-1/2 -translate-y-1/2 text-[#808080] pl-4 text-sm">
              Master in Information Management
            </p>
            <div className="rounded-md w-full h-12 bg-[#FCFCFC] pl-4" />
            <MdKeyboardArrowDown
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <button
          className="cursor-pointer flex items-center gap-2 p-2 w-[90%] justify-center rounded-md mt-2 font-extrabold text-[21px] montserrat bg-[#8312A5] text-white"
          onClick={() => navigate("/add-courses")}
        >
          Next
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
