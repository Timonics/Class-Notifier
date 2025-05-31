import { TbX, TbHome, TbTrash } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { ChangeEvent, useState } from "react";
import Loading from "../../../components/loading";
import { useLoadingStore } from "../../../store/loadingStore";
import { RiSendPlaneFill } from "react-icons/ri";
import { useCourses } from "../../../hooks/useCourses";

export default function EditCourse({ courseId }: { courseId: number }) {
  const { editCourse} = useCourses();
  const { isLoading } = useLoadingStore();
  const [newCourseCode, setNewCourseCode] = useState({
    code: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewCourseCode((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        <p className="poppins font-semibold text-lg">Edit Course</p>

        <input
          placeholder="Enter new course code"
          className="h-[40px] w-full border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium pl-2 rounded-lg mt-4 text-sm"
          name="name"
          value={newCourseCode.code}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <button
          disabled={newCourseCode.code === ""}
          className="flex disabled:bg-[#9B51E0]/50 bg-[#9B51E0] disabled:cursor-not-allowed gap-1 rounded-full items-center p-2 poppins justify-center cursor-pointer text-white w-1/2"
          onClick={() => editCourse(Number(courseId), newCourseCode)}
        >
          <RiSendPlaneFill />
          <p className="text-[10px] font-medium">Publish</p>
        </button>
      </div>
      {isLoading && (
        <div className="bg-black/30 z-30 absolute inset-0">
          <Loading />
        </div>
      )}
    </div>
  );
}
