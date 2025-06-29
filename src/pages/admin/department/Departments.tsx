import { TbEdit, TbEye, TbPlus, TbTrash } from "react-icons/tb";
import { useEffect, useState } from "react";
import CreateNewDepartment from "./CreateNewDepartment";
import { useDepartmentStore } from "../../../store/admin/departmentStore";
import { useDepartment } from "../../../hooks/admin/useDepartment";
import Loader from "../../../components/loader";
import { useLoadingStore } from "../../../store/admin/loadingStore";
import DeleteModal from "../../../components/delete-modal";
import EditDepartment from "./EditDepartment";
import ViewDepartment from "./ViewDepartment";

export default function Departments() {
  const { isLoading } = useLoadingStore();
  const { getDepartments, deleteDepartment } = useDepartment();
  const { departmentData, departmentSearchTerm } = useDepartmentStore();
  const [createNewDepartmentIsOpen, setCreateNewDepartmentIsOpen] =
    useState(false);
  const [showDeleteDepartmentIsOpen, setShowDeleteDepartmentIsOpen] =
    useState(false);
  const [departmentName, setDepartmentName] = useState<string>("");
  const [showEditDepartmentIsOpen, setShowEditDepartmentIsOpen] =
    useState(false);
  const [showViewDepartmentIsOpen, setShowViewDepartmentIsOpen] =
    useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<
    number | string
  >("");

  useEffect(() => {
    getDepartments();
  }, []);

  const baseElements = departmentSearchTerm
    ? departmentData.filter((department) =>
        department.name
          .toLowerCase()
          .includes(departmentSearchTerm.toLowerCase())
      )
    : departmentData;

  const dataElements = baseElements.length ? (
    baseElements.map((data) => (
      <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-7 p-3 datas-center">
        <div className="text-gray-950">{data.id}</div>
        <div className="text-blue-700">{data.name}</div>
        <div className="text-blue-700">{data.studentCount}</div>
        <div className="text-blue-700">{data.courseCount}</div>
        <button
          className="cursor-pointer flex items-center justify-end text-gray-600 transition ease-in-out duration-300 hover:text-sky-500"
          onClick={() => {
            setSelectedDepartmentId(data.id);
            setShowEditDepartmentIsOpen(true);
          }}
        >
          <TbEdit size={20} />
        </button>
        <button
          onClick={() => {
            setSelectedDepartmentId(data.id);
            setDepartmentName(data.name);
            setShowViewDepartmentIsOpen(true);
          }}
          className="flex transition ease-in-out duration-300 hover:text-purple-800 cursor-pointer items-center justify-end text-gray-600"
        >
          <TbEye size={20} />
        </button>
        <button
          onClick={() => {
            setDepartmentName(data.name);
            setSelectedDepartmentId(data.id);
            setShowDeleteDepartmentIsOpen(true);
          }}
          className="cursor-pointer transition ease-in-out duration-300 hover:text-red-500 flex items-center justify-end text-gray-600"
        >
          <TbTrash size={20} />
        </button>
      </div>
    ))
  ) : (
    <div className="h-[200px] flex justify-center items-center poppins text-3xl font-bold text-gray-500">
      {departmentSearchTerm && !baseElements.length
        ? "No Data Found"
        : "Add Department to view"}
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold montserrat text-sm">Institution</p>
        <button
          className="flex items-center bg-[#7F56D9] text-white py-2 px-3 text-xs font-medium poppins gap-3 rounded-full mr-4 cursor-pointer"
          onClick={() => setCreateNewDepartmentIsOpen(true)}
        >
          <TbPlus />
          Create New Department
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-7 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600">
          <p className="">ID</p>
          <p className="">Department</p>
          <p className="">Students</p>
          <p>Course Offering</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="gap-2 relative">
          {isLoading && <Loader />}
          {dataElements}
        </div>
      </div>
      {createNewDepartmentIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setCreateNewDepartmentIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CreateNewDepartment
              departmentIsOpened={setCreateNewDepartmentIsOpen}
            />
          </div>
        </>
      )}
      {showDeleteDepartmentIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowDeleteDepartmentIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DeleteModal
              type="Department"
              name={departmentName}
              deleteAction={() =>
                deleteDepartment(Number(selectedDepartmentId))
              }
            />
          </div>
        </>
      )}
      {showEditDepartmentIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowEditDepartmentIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <EditDepartment departmentId={selectedDepartmentId} />
          </div>
        </>
      )}
      {showViewDepartmentIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowViewDepartmentIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ViewDepartment
              departmentId={selectedDepartmentId}
              departmentName={departmentName}
            />
          </div>
        </>
      )}
    </div>
  );
}
