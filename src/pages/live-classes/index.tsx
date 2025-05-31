import { RiLiveLine } from "react-icons/ri";
import { Course } from "../../types/courses";

export default function LiveClasses() {
  //supposing this are the classes ongoing at the moment
  const ongoingClasses: Course[] = [
    {
      courseCode: "LIB 887",
      courseName: "Information Policies",
      courseLecturer: "Dr Haruna Abu",
      lectureDateTime: "Thursday 13th March 2025 | 03:30pm",
    },
    {
      courseCode: "LIB 887",
      courseName: "Information Policies",
      courseLecturer: "Dr Haruna Abu",
      lectureDateTime: "Thursday 13th March 2025 | 03:30pm",
    },
  ];

  const ongoingClassesElements = ongoingClasses.map((course) => (
    <div className="h-[325px] w-full bg-[#32073F] rounded-[10px] flex flex-col items-center justify-center text-white p-4 gap-5">
      <div className="text-center space-y-2">
        <p className="text-sm montserrat font-semibold">Ongoing Class</p>
        <p className="border border-[#B884C8] bg-[#FAECFF] text-[#32073F] font-semibold montserrat flex items-center justify-center rounded-[10px] text-[13px] w-[260px] h-[28px]">
          {course.lectureDateTime}
        </p>
      </div>
      <div className="h-[100px] w-[289px] border-y-[1.5px] border-[#B884C8C2] flex flex-col items-center justify-center gap-1">
        <p className="text-2xl font-bold">{course.courseCode}</p>
        <p className="text-lg font-medium">{course.courseName}</p>
        <p className="text-sm font-bold montserrat">
          {" "}
          - {course.courseLecturer}
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-3">
        <button className="h-[50px] w-[80%] rounded-full bg-[#FF0404] flex items-center justify-center text-white montserrat gap-2 font-semibold">
          <p className="text-sm">Join ongoing class</p>
          <RiLiveLine className="-rotate-[25deg]" />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full gap-5 mb-[45px]">
      <div>
        <p className="montserrat text-[#32073F] text-center font-semibold">
          Upcoming Classes
        </p>
        <p className="text-[#32073FCF] montserrat text-center font-normal text-xs">
          Join ongoing class
        </p>
      </div>
      {ongoingClassesElements}
      <div>
        <p className="montserrat text-[#32073F] text-center font-semibold">
          Next Classes
        </p>
        <p className="text-[#32073FCF] montserrat text-center font-normal text-xs">
          Find the list of the all upcoming class for the week
        </p>
      </div>
      <div className="h-[325px] w-full bg-[#32073F] rounded-[10px] flex flex-col items-center justify-center text-white p-4 gap-3">
        <p className="text-sm montserrat font-semibold">
          Your next class is scheduled for
        </p>
        <p className="border border-[#B884C8] bg-[#FAECFF] text-[#32073F] font-semibold montserrat flex items-center justify-center rounded-[10px] text-[13px] w-[260px] h-[28px]">
          Thursday 13th March 2025 | 03:30pm
        </p>
        <div className="h-[100px] w-[289px] border-y-[1.5px] border-[#B884C8C2] flex flex-col items-center justify-center gap-1">
          <p className="text-2xl font-bold">LIBS 887</p>
          <p className="text-lg font-medium">Information Policies</p>
          <p className="text-sm font-bold montserrat"> - Dr Haruna Abu</p>
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="size-[76.6px] border-[3px] border-[#B884C899] rounded-[7px] bg-white text-[#8312A5] text-[32px] flex items-center justify-center">
              33
            </div>
            <p className="text-[#D9D9D9] text-sm">Hours</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-[76.6px] border-[3px] border-[#B884C899] rounded-[7px] bg-white text-[#8312A5] text-[32px] flex items-center justify-center">
              02
            </div>
            <p className="text-[#D9D9D9] text-sm">Minutes</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-[76.6px] border-[3px] border-[#B884C899] rounded-[7px] bg-white text-[#8312A5] text-[32px] flex items-center justify-center">
              55
            </div>
            <p className="text-[#D9D9D9] text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
