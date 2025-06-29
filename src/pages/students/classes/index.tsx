import { courses } from "../../../dummyData/courses";

export default function ClassesPage() {
  const coursesElements = courses.map((course) => (
    <div className="w-[328px] h-[121px] rounded-xl p-6 bg-[#E8E4E980] relative space-y-1">
        <p className="absolute font-bold right-4 text-xs text-[#32073FCF] montserrat">2 days left</p>
      <p className="text-sm font-bold text-[#101828]">
        {course.courseCode}{" "}
        <span className="font-normal text-[#667085]">
          - {course.courseLecturer}
        </span>
      </p>
      <p className="text-base text-[#344054]">{course.courseName}</p>
      <p className="bg-[#FAECFF] text-[#32073F] font-semibold montserrat flex items-center justify-center rounded-[10px] text-sm w-[260px] h-[28px]">
        Thursday 13th March 2025 | 03:30pm
      </p>
    </div>
  ));

  return (
    <div className="w-full p-2 pt-4 space-y-1">
      <p className="montserrat text-[#32073F] text-center font-semibold">
        Upcoming Classes
      </p>
      <p className="text-[#32073FCF] montserrat text-center font-normal text-xs">
        Find the list of the all upcoming class for the week
      </p>
      <div className="flex flex-col gap-4 mt-6 mb-[30px] items-center">
        {coursesElements}
      </div>
    </div>
  );
}
