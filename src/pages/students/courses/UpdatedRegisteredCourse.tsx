import { useState } from "react";
import { Course } from "../../../types/courses";
import { courses } from "../../../dummyData/courses";
import { BiTrash } from "react-icons/bi";
import { useCourse } from "../../../hooks/admin/useCourses";
import { TbArrowDown } from "react-icons/tb";

export default function UpdatedRegisteredCourse() {
  const { setRegisteredCourses, registeredCourses } = useCourse();
  const [addCourse, setAddCourse] = useState<Course[]>([]);
  const [openAvailableCourses, setOpenAvailableCourses] =
    useState<boolean>(false);

  const handleRemoveAddedCourse = (courseSelected: Course) => {
    const filteredSelectedCourses = addCourse.filter(
      (course) => course.courseCode !== courseSelected.courseCode
    );
    setAddCourse(filteredSelectedCourses);
    setRegisteredCourses(filteredSelectedCourses);
  };

  const addedCourses = addCourse.map((course) => (
    <div className="flex items-center gap-4">
      <div className="bg-[#FCFCFC] rounded-2xl">
        <div
          key={course.courseCode}
          className="p-2 rounded-2xl text-start text-sm"
          style={{
            color: course.courseColorCode,
            backgroundColor: `${course.courseColorCode}20`,
            border: `1px solid ${course.courseColorCode}`,
          }}
        >
          <p>{course.courseCode}</p>
          <p>{course.courseName}</p>
          <p>{course.courseLecturer}</p>
        </div>
      </div>
      <div
        className="text-red-600 cursor-pointer"
        onClick={() => handleRemoveAddedCourse(course)}
      >
        <BiTrash />
      </div>
    </div>
  ));

  return (
    <div
      className="flex flex-col w-[95%] gap-10"
      onClick={() => {
        if (openAvailableCourses) setOpenAvailableCourses(false);
      }}
    >
      <div className="poppins text-lg mx-auto w-80 space-y-4 mt-10 text-center">
        <p className="text-2xl text-[#8312A5]">Update Registered Course</p>
        <p className="text-xs text-[#8312A5] leading-[1.53em]">
          Lets help you get to your registered course
          <br /> on your school portal{" "}
          <span className="text-[#B884C8] underline">(click here)</span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="" className="text-sm text-[#8312A5] font-light text-start">
          Pick Your registered course here
        </label>
        <div
          className="h-14 rounded-md bg-[#FCFCFC] border border-[#ccc] relative flex items-center pl-4 cursor-pointer"
          onClick={() => setOpenAvailableCourses(!openAvailableCourses)}
        >
          <TbArrowDown className="absolute right-4 text-black/30"/>
          <p className="text-black/40 text-sm">--select institution here</p>
          {openAvailableCourses && (
            <ul className="min-h-[300px] rounded-md w-full bg-[#FCFCFC] border border-[#ccc] text-black absolute top-14 left-0 bottom-0 overflow-y-auto flex flex-col gap-5 text-sm p-4">
              {courses.map((course) => (
                <li
                  key={course.courseCode}
                  className={`border w-fit p-2 rounded-2xl text-start`}
                  style={{
                    color: course.courseColorCode,
                    backgroundColor: `${course.courseColorCode}20`,
                    border: `1px solid ${course.courseColorCode}`,
                  }}
                  onClick={() => {
                    setOpenAvailableCourses(false);
                    if (!addCourse.includes(course)) {
                      setAddCourse((prevState) => [...prevState, course]);
                    }
                    if (!registeredCourses.includes(course))
                      setRegisteredCourses((prevState) => [
                        ...prevState,
                        course,
                      ]);
                  }}
                >
                  <p>{course.courseCode}</p>
                  <p>{course.courseName}</p>
                  <p>{course.courseLecturer}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-3 mt-3">{addedCourses}</div>
      </div>
    </div>
  );
}
