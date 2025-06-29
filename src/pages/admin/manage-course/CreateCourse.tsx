import { TbHome, TbTrash, TbUser, TbX } from "react-icons/tb";
import Ripple from "../../../components/ripple";
import { ChangeEvent, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useInstitution } from "../../../hooks/admin/useInstitution";
import { useProgram } from "../../../hooks/admin/useProgram";
import { useDepartment } from "../../../hooks/admin/useDepartment";
import { useInstitutionStore } from "../../../store/admin/institutionStore";
import { useProgramStore } from "../../../store/admin/programStore";
import { useDepartmentStore } from "../../../store/admin/departmentStore";
import { useLecturer } from "../../../hooks/admin/useLecturer";
import Loader from "../../../components/loader";
import { useLoadingStore } from "../../../store/admin/loadingStore";
import { useLecturerStore } from "../../../store/admin/lecturerStore";
import { useCourses } from "../../../hooks/admin/useCourses";
import { CiPlane } from "react-icons/ci";
import { Course } from "../../../interfaces/admin/course.interfaces";
import { AssignLecturer } from "../../../interfaces/admin/lecturer.interfaces";

export default function CreateCourse() {
  const { getInstitutions } = useInstitution();
  const { getPrograms } = useProgram();
  const { getDepartments } = useDepartment();
  const { getAllLecturers, assignLecturerToCourse } = useLecturer();
  const { addCourse } = useCourses();

  const { isLoading } = useLoadingStore();
  const { institutionData } = useInstitutionStore();
  const { programData } = useProgramStore();
  const { departmentData } = useDepartmentStore();
  const { lecturerData } = useLecturerStore();

  const [institutionIsOpen, setInstitutionIsOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [departmentIsOpen, setDepartmentIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [programIsOpen, setProgramIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const [addCourseData, setAddCourseData] = useState<Partial<Course> | null>(
    null
  );
  const [assignLecturerData, setAssignLecturerData] =
    useState<AssignLecturer | null>(null);

  const [selectedLecturerId, setSelectedLecturerId] = useState<number>(0);
  // const [selectedLecturer, setSelectedLecturer] = useState(false);

  useEffect(() => {
    getInstitutions();
    getPrograms();
    getDepartments();
    getAllLecturers();
  }, []);

  const lecturerElements = lecturerData.map((lecturer) => {
    const id = lecturer.id;
    return (
      <div
        onClick={() => {
          setAssignLecturerData({ lecturer_id: lecturer.id });
          setSelectedLecturerId(lecturer.id);
        }}
        className={`flex border ${
          selectedLecturerId === id
            ? "bg-[#9B51E0] text-white"
            : "border-[#9B51E0] text-[#9B51E0]"
        } gap-1 rounded-full items-center p-2 poppins justify-center cursor-pointer`}
      >
        <TbUser />
        <p className="text-[10px] font-medium text-nowrap">{lecturer.name}</p>
      </div>
    );
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddCourseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="w-[400px] h-full overflow-auto scrollbar p-4 rounded-lg bg-white shadow-2xl flex flex-col gap-4 relative"
      onClick={() => {
        if (institutionIsOpen) setInstitutionIsOpen(false);
        if (departmentIsOpen) setDepartmentIsOpen(false);
      }}
    >
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX size={20} className="ml-auto" />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbHome className="text-[#344054]" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Create New Course</p>
      </div>
      <div className="flex flex-col gap-2 montserrat text-sm font-medium z-20">
        <div className="mt-5 flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-[10px] text-[#344054] font-semibold">
              Enter course code
            </p>
            <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] poppins bg-white">
              <input
                placeholder="| e.g LIBS 830"
                className="h-[40px] outline-none placeholder:text-sm placeholder:font-medium w-full"
                value={addCourseData?.code}
                name="code"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 z-20">
            <div className="space-y-1">
              <p className="text-[13px] text-[#344054] font-semibold">
                Select Institution
              </p>
              <div
                className="h-[40px] rounded-lg bg-white border-[2px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
                onClick={() => {
                  setInstitutionIsOpen(!institutionIsOpen);
                  setDepartmentIsOpen(false);
                  setProgramIsOpen(false);
                }}
              >
                <p className="text-xs font-medium text-[#101828]">
                  {selectedInstitution
                    ? selectedInstitution
                    : "--Select institution for this course--"}
                </p>
                <MdKeyboardArrowDown className="absolute right-2" />
                {institutionIsOpen &&
                  (institutionData.length !== 0 ? (
                    <ul className="absolute top-[40px] left-0 z-20 border-2 border-gray-200 w-full bg-white rounded-lg shadow-2xl">
                      {institutionData.map((institution) => (
                        <li
                          className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                          onClick={() => {
                            setSelectedInstitution(institution.name);
                            setAddCourseData((prevState) => ({
                              ...prevState,
                              institution_id: institution.id,
                            }));
                          }}
                        >
                          {institution.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="border-2 h-[110px] rounded-lg bg-white border-gray-200 z-20 absolute top-[40px] left-0 w-full flex justify-center items-center">
                      {isLoading && <Loader />}
                      <p className="font-bold">
                        Add institution before prroceeding...
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[13px] text-[#344054] font-semibold">
                Select Department
              </p>
              <div
                className="h-[40px] rounded-lg bg-white border-2 border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
                onClick={() => {
                  setDepartmentIsOpen(!departmentIsOpen);
                  setProgramIsOpen(false);
                  setInstitutionIsOpen(false);
                }}
              >
                <p className="text-xs font-medium text-[#101828]">
                  {selectedDepartment
                    ? selectedDepartment
                    : "--Select department--"}
                </p>
                <MdKeyboardArrowDown className="absolute right-2" />
                {departmentIsOpen &&
                  (departmentData.length !== 0 ? (
                    <ul className="absolute top-[40px] z-20 border-2 border-gray-200 left-0 w-full bg-white rounded-lg shadow-2xl">
                      {departmentData.map((department) => (
                        <li
                          className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                          onClick={() => {
                            setSelectedDepartment(department.name);
                            setAddCourseData((prevState) => ({
                              ...prevState,
                              department_id: department.id,
                            }));
                          }}
                        >
                          {department.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="border-2 h-[110px] rounded-lg bg-white border-gray-200 z-20 absolute top-[40px] left-0 w-full flex justify-center items-center">
                      {isLoading && <Loader />}
                      <p className="font-bold">
                        Add department before prroceeding...
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[13px] text-[#344054] font-semibold">
                Select Program
              </p>
              <div
                className="h-[40px] rounded-lg bg-white border-2 border-[#D0D5DD] flex items-center px-2 relative cursor-pointer w-full"
                onClick={() => {
                  setProgramIsOpen(!programIsOpen);
                  setDepartmentIsOpen(false);
                  setInstitutionIsOpen(false);
                }}
              >
                <p className="text-xs font-medium text-[#101828]">
                  {selectedProgram ? selectedProgram : "--Select program--"}
                </p>
                <MdKeyboardArrowDown className="absolute right-2" />
                {programIsOpen &&
                  (programData.length !== 0 ? (
                    <ul className="absolute top-[40px] z-20 border-2 border-gray-200 left-0 w-full bg-white rounded-lg shadow-2xl">
                      {programData.map((program) => (
                        <li
                          className={`p-2 text-[13px] text-[#404040] cursor-pointer border-b border-[#97979786]`}
                          onClick={() => {
                            setSelectedProgram(program.name);
                            setAddCourseData((prevState) => ({
                              ...prevState,
                              program_id: program.id,
                            }));
                          }}
                        >
                          {program.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="border-2 h-[110px] rounded-lg bg-white border-gray-200 z-20 absolute top-[40px] left-0 w-full flex justify-center items-center">
                      {isLoading && <Loader />}
                      <p className="font-bold">
                        Add institution before prroceeding...
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <h1 className="text-gray-600 text-xs">Add Lecturer</h1>
          <div className="flex gap-2 flex-wrap relative">
            {lecturerData.length !== 0 ? (
              lecturerElements
            ) : (
              <div className="mt-10">
                <Loader />
              </div>
            )}
          </div>
          <input
            placeholder="Enter new department"
            className="h-[40px] border border-[#9B51E0] outline-none placeholder:text-xs placeholder:font-medium pl-2 rounded-lg mt-4 text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
          <TbTrash />
          <p className="text-[10px] font-medium">Cancel</p>
        </div>
        <button
          onClick={() => {
            assignLecturerToCourse(assignLecturerData!);
            addCourse(addCourseData!);
          }}
          className="flex bg-[#9B51E0] gap-1 rounded-full items-center p-2 poppins justify-center text-white w-1/2 cursor-pointer"
        >
          <CiPlane />
          <p className="text-[10px] font-medium">Publish</p>
        </button>
      </div>
    </div>
  );
}
