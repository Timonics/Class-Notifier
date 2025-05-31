import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function CustomizeClass() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      <Nav />
      <p className="poppins text-[22px] mx-auto w-70 mt-10">
        Lets help you customise your class
      </p>
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px]">Institution</p>
          <div className="relative">
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
          <p className="text-start text-[16px]">Programme</p>
          <div className="relative">
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
          <p className="text-start text-[16px]">Faculty</p>
          <div className="relative">
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
          <p className="text-start text-[16px]">Department</p>
          <div className="relative">
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
