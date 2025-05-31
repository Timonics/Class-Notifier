import { TbEdit, TbEye, TbPlus } from "react-icons/tb";
import { courses } from "../../../dummyData/courses";
import { useState } from "react";
import CreateClass from "./CreateNewClass";
import { statusColorCode } from "../../../utils/colorCode";

export default function ScheduledClasses() {
  const [createNewClassIsOpen, setCreateNewClassIsOpen] = useState(false);
  const dataElements = courses.map((data) => {
    const color = statusColorCode(data.status)
    return (
      <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-11 gap-5 p-3 datas-center">
        <div className="flex flex-col gap-1 col-span-2">
          <div className="text-gray-700">{data.courseCode}</div>
          <div className="text-gray-500">{data.courseName}</div>
        </div>
        <div className="text-blue-700">Sun Mar 21, 2025</div>
        <div className="text-blue-700">12:00 am</div>
        <div className="text-blue-700 col-span-2">{data.institution}</div>
        <div className="text-blue-700">{data.departments}</div>
        <div className="text-blue-700">{data.courseLecturer}</div>
        <div className="size-fit px-2 py-1 rounded-full" style={{
          color,
          backgroundColor: `${color}30`,
          border: "1.5px solid"
        }}>{data.status}</div>
        <div className="flex items-center justify-end text-gray-600">
          <TbEdit size={20} />
        </div>
        <div className="flex items-center justify-end text-gray-600">
          <TbEye size={20} />
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold montserrat text-sm">Class Scheduled</p>
        <button
          className="flex items-center bg-[#7F56D9] text-white py-2 px-3 text-xs font-medium poppins gap-3 rounded-full mr-4 cursor-pointer"
          onClick={() => setCreateNewClassIsOpen(true)}
        >
          <TbPlus />
          Create New Class
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-11 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600 gap-5">
          <p className="col-span-2">Class Course</p>
          <p className="">Class Date</p>
          <p>Time</p>
          <p className="col-span-2">Institution Name</p>
          <p className="">Departments</p>
          <p>Lecturers</p>
          <p>Status</p>
          <p></p>
          <p></p>
        </div>
        <div className="gap-2">{dataElements}</div>
      </div>
      {createNewClassIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setCreateNewClassIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%]">
            <CreateClass />
          </div>
        </>
      )}
    </div>
  );
}
