import { TbEdit, TbEye, TbPlus, TbTrash } from "react-icons/tb";
import { useEffect, useState } from "react";
import CreateNewCourse from "./CreateCourse";
import Loading from "../../../components/loading";
import { useLoadingStore } from "../../../store/loadingStore";
import { useCourses } from "../../../hooks/useCourses";
import { useCourseStore } from "../../../store/courseStore";
import EditCourse from "./EditCourse";
import DeleteModal from "../../../components/delete-modal";

export default function ManageInstitutions() {
  const { courseData } = useCourseStore();
  const { getAllCourses, deleteCourse } = useCourses();
  const { isLoading } = useLoadingStore();
  const [createNewCourseIsOpen, setCreateNewCourseIsOpen] = useState(false);
  const [showDeleteCourseIsOpen, setShowDeleteCourseIsOpen] = useState(false);
  const [showEditCourseIsOpen, setShowEditCourseIsOpen] = useState(false);
  const [showViewCourseIsOpen, setShowViewCourseIsOpen] = useState(false);
  const [courseName, setCourseName] = useState<string>("");
  const [selectedCourseId, setSelectedCourseId] = useState<number>();

  useEffect(() => {
    getAllCourses();
  }, []);

  const dataElements =
    courseData.length !== 0 ? (
      courseData.map((data) => (
        <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-11 p-3 items-center">
          <div className="text-gray-950">{data.id}</div>
          <div className="flex flex-col gap-1 col-span-2">
            <div className="text-gray-700">{data.code}</div>
            <div className="text-gray-500">{data.name}</div>
          </div>
          <div className="text-blue-700 col-span-2">
            {data.Institution.name}
          </div>
          <div className="text-blue-700">{data.Department.name}</div>
          <div className="text-blue-700">{data.Program.name}</div>
          <div className="text-blue-700">
            {data.Lecturers.map((lecturer) => (
              <div className="flex flex-wrap text-blue-700">{`${lecturer},`}</div>
            ))}
          </div>
          <button
            onClick={() => {
              setSelectedCourseId(data.id);
              setShowEditCourseIsOpen(true);
            }}
            className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 flex items-center justify-end text-gray-600"
          >
            <TbEdit size={20} />
          </button>
          <button
            onClick={() => {
              setShowViewCourseIsOpen(true);
            }}
            className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto flex cursor-pointer transition ease-in-out duration-300 hover:text-purple-800 items-center justify-end text-gray-600"
          >
            <TbEye size={20} />
          </button>
          <button
            onClick={() => {
              setCourseName(data.name);
              setShowDeleteCourseIsOpen(true);
            }}
            className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto flex cursor-pointer transition ease-in-out duration-300 hover:text-red-500 items-center justify-end text-gray-600"
          >
            <TbTrash size={20} />
          </button>
        </div>
      ))
    ) : (
      <div className="h-[200px] flex justify-center items-center poppins text-3xl font-bold text-gray-500">
        Add Course to view
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold montserrat text-sm">Institution</p>
        <button
          className="flex items-center bg-[#7F56D9] text-white py-2 px-3 text-xs font-medium poppins gap-3 rounded-full mr-4 cursor-pointer"
          onClick={() => setCreateNewCourseIsOpen(true)}
        >
          <TbPlus />
          Create New Course
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-11 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600">
          <p className="">ID</p>
          <p className="col-span-2">Course</p>
          <p className="col-span-2">Institution Name</p>
          <p className="">Departments</p>
          <p>Programs</p>
          <p>Lecturers</p>
          <p></p>
          <p></p>
        </div>
        <div className="gap-2 relative">
          {isLoading && <Loading />}
          {dataElements}
        </div>
      </div>
      {createNewCourseIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setCreateNewCourseIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%]">
            <CreateNewCourse />
          </div>
        </>
      )}
      {showEditCourseIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowEditCourseIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <EditCourse courseId={selectedCourseId!} />
          </div>
        </>
      )}
      {showViewCourseIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowViewCourseIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <EditCourse CourseId={0} /> */}
          </div>
        </>
      )}
      {showDeleteCourseIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowDeleteCourseIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DeleteModal
              type="Course"
              name={`${courseName} Course`}
              deleteAction={() => deleteCourse(selectedCourseId!)}
            />
          </div>
        </>
      )}
    </div>
  );
}
