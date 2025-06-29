import { TbEdit, TbEye, TbPlus, TbTrash } from "react-icons/tb";
import {  useEffect, useState } from "react";
import CreateNewInstitution from "./CreateNewInstitution";
import { useInstitutionStore } from "../../../store/admin/institutionStore";
import Loader from "../../../components/loader";
import { useLoadingStore } from "../../../store/admin/loadingStore";
import { useInstitution } from "../../../hooks/admin/useInstitution";
import DeleteModal from "../../../components/delete-modal";

export default function AllInstitutions() {
  const { isLoading } = useLoadingStore();
  const { institutionData, institutionSearchTerm, filterSelected } =
    useInstitutionStore();
  const { getInstitutions, deleteInstitution } = useInstitution();
  const [createNewInstitutionIsOpen, setCreateNewInstitutionIsOpen] =
    useState(false);
  const [showDeleteInstitutionIsOpen, setShowDeleteInstitutionIsOpen] =
    useState(false);
  const [institutionName, setInstitutionName] = useState<string>("");
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<number>();

  useEffect(() => {
    getInstitutions(), [];
  });

  const filteredElements =
    filterSelected === "All"
      ? institutionData
      : institutionData.filter(
          (data) => data.institutionType == filterSelected
        );

  const baseElements = filterSelected
    ? institutionSearchTerm
      ? filteredElements.filter((instituiton) =>
          instituiton.name
            .toLowerCase()
            .includes(institutionSearchTerm.toLowerCase())
        )
      : filteredElements
    : institutionSearchTerm
    ? institutionData.filter((instituiton) =>
        instituiton.name
          .toLowerCase()
          .includes(institutionSearchTerm.toLowerCase())
      )
    : institutionData;

  const dataElements = baseElements.length ? (
    baseElements.map((data) => (
      <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-12 p-3 items-center">
        <div className="text-gray-950">{data.id}</div>
        <div className="text-blue-700 col-span-3">{data.name}</div>
        <div className="text-blue-700 col-span-2">{data.institutionType}</div>
        <div className="text-blue-700">{data.departmentCount}</div>
        <div className="text-blue-700">{data.programCount}</div>
        <div className="text-blue-700">{data.courseCount}</div>
        <button className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 flex items-center justify-end text-gray-600">
          <TbEdit size={20} />
        </button>
        <div className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-purple-800 flex items-center justify-end text-gray-600">
          <TbEye size={20} />
        </div>
        <button
          onClick={() => {
            setInstitutionName(data.name);
            setSelectedInstitutionId(data.id);
            setShowDeleteInstitutionIsOpen(true);
          }}
          className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-red-500 flex items-center justify-end text-gray-600"
        >
          <TbTrash size={20} />
        </button>
      </div>
    ))
  ) : (
    <div className=" h-[200px] flex justify-center items-center">
      <p className="text-2xl font-bold text-gray-700 poppins">
        {filterSelected === "All"
          ? !baseElements.length
            ? "No Data found"
            : "Add Institution to view"
          : `No ${filterSelected} Found`}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold montserrat text-sm">Institution</p>
        <button
          className="flex items-center bg-[#7F56D9] text-white py-2 px-3 text-xs font-medium poppins gap-3 rounded-full mr-4 cursor-pointer"
          onClick={() => {
            setCreateNewInstitutionIsOpen(true);
          }}
        >
          <TbPlus />
          Create New Institution
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-12 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600">
          <p className="">ID</p>
          <p className="col-span-3">Institution</p>
          <p className="col-span-2 ">Institution Type</p>
          <p className="">Departments</p>
          <p>Programs</p>
          <p>Course Offering</p>
          <p />
          <p />
          <p />
        </div>
        <div className="gap-2 relative">
          {isLoading && <Loader />}
          {dataElements}
        </div>
      </div>
      {createNewInstitutionIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setCreateNewInstitutionIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CreateNewInstitution
              institutionIsOpened={setCreateNewInstitutionIsOpen}
            />
          </div>
        </>
      )}
      {showDeleteInstitutionIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowDeleteInstitutionIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DeleteModal
              type="Institution"
              name={institutionName}
              deleteAction={() => deleteInstitution(selectedInstitutionId!)}
            />
          </div>
        </>
      )}
    </div>
  );
}
