import { TbEdit, TbEye, TbPlus, TbTrash } from "react-icons/tb";
import { useEffect, useState } from "react";
import CreateNewProgram from "./CreateNewProgram";
import { useProgramStore } from "../../../store/programStore";
import Loading from "../../../components/loading";
import { useLoadingStore } from "../../../store/loadingStore";
import { useProgram } from "../../../hooks/useProgram";
import DeleteModal from "../../../components/delete-modal";
import EditProgram from "./EditProgram";

export default function ProgramsList() {
  const { programData } = useProgramStore();
  const { getPrograms, deleteProgram } = useProgram();
  const { isLoading } = useLoadingStore();
  const [createNewProgramIsOpen, setCreateNewProgramIsOpen] = useState(false);
  const [showDeleteProgramIsOpen, setShowDeleteProgramIsOpen] = useState(false);
  const [showEditProgramIsOpen, setShowEditProgramIsOpen] = useState(false);
  const [showViewProgramIsOpen, setShowViewProgramIsOpen] = useState(false);
  const [programName, setProgramName] = useState<string>("");
  const [selectedProgramId, setSelectedProgramId] = useState<number>();

  useEffect(() => {
    getPrograms();
  }, []);

  const dataElements =
    programData.length !== 0 ? (
      programData.map((data) => (
        <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-6 p-3 items-center">
          <div className="text-gray-950">{data.id}</div>
          <div className="text-blue-700">{data.name}</div>
          <div className="text-blue-700">--</div>
          <button
            onClick={() => {
              setShowEditProgramIsOpen(true);
            }}
            className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 flex items-center justify-end text-gray-600"
          >
            <TbEdit size={20} />
          </button>
          <div className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-purple-800 flex items-center justify-end text-gray-600">
            <TbEye size={20} />
          </div>
          <button
            onClick={() => {
              setProgramName(data.name);
              setSelectedProgramId(data.id);
              setShowDeleteProgramIsOpen(true);
            }}
            className="hover:bg-gray-100 p-1.5 rounded-full w-fit ml-auto cursor-pointer transition ease-in-out duration-300 hover:text-red-500 flex items-center justify-end text-gray-600"
          >
            <TbTrash size={20} />
          </button>
        </div>
      ))
    ) : (
      <div className="h-[200px] flex justify-center items-center poppins text-3xl font-bold text-gray-500">
        Add Program to view
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold montserrat text-sm">Programs</p>
        <button
          className="flex items-center bg-[#7F56D9] text-white py-2 px-3 text-xs font-medium poppins gap-3 rounded-full mr-4 cursor-pointer"
          onClick={() => setCreateNewProgramIsOpen(true)}
        >
          <TbPlus />
          Create New Program
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-6 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600">
          <p className="">ID</p>
          <p className="">Programs</p>
          <p className="">Student</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="gap-2 relative">
          {isLoading && <Loading />}
          {dataElements}
        </div>
      </div>
      {createNewProgramIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setCreateNewProgramIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CreateNewProgram newProgramIsOpen={setCreateNewProgramIsOpen} />
          </div>
        </>
      )}
      {showEditProgramIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowEditProgramIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <EditProgram programId={0} />
          </div>
        </>
      )}
      {showViewProgramIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowViewProgramIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <EditProgram programId={0} />
          </div>
        </>
      )}
      {showDeleteProgramIsOpen && (
        <>
          <div
            className="bg-black/20 backdrop-blur-[3px] absolute inset-0"
            onClick={() => setShowDeleteProgramIsOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DeleteModal
              type="Program"
              name={`${programName} Program`}
              deleteAction={() => deleteProgram(selectedProgramId!)}
            />
          </div>
        </>
      )}
    </div>
  );
}
