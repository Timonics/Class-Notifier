import { TbX, TbTrash } from "react-icons/tb";
import Ripple from "../ripple";
import { useLoadingStore } from "../../store/loadingStore";
import Loading from "../loading";

export default function DeleteModal({
  type,
  name,
  deleteAction,
}: {
  type: string;
  name: string;
  deleteAction: () => Promise<void>;
}) {
  const { isLoading } = useLoadingStore();

  return (
    <div
      className={`w-[400px] p-4 rounded-lg overflow-auto no-scroll bg-white shadow-2xl flex flex-col gap-4 relative`}
    >
      <Ripple />
      <div className="space-y-4 z-20">
        <TbX
          size={20}
          className="ml-auto cursor-pointer"
          //onClick={() => institutionIsOpened(false)}
        />
        <div className="size-[40px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbTrash className="text-red-600" size={25} />
        </div>
        <p className="poppins font-semibold text-lg">Delete {type}</p>
      </div>
      <div className="flex flex-col gap-2 z-20">
        <p className="text-xs">Are you sure you wish to delete {name}</p>
        <div className="flex items-center gap-2 mt-5">
          <div className="flex border-2 border-gray-200 text-gray-600 gap-1 rounded-full items-center p-2 poppins justify-center w-1/2">
            <p className="text-[10px] font-medium">Cancel</p>
          </div>
          <button
            className="flex bg-red-500 gap-1 rounded-full items-center p-2 poppins justify-center text-white w-1/2 cursor-pointer"
            onClick={deleteAction}
          >
            <p className="text-[10px] font-medium">Delete</p>
          </button>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
}
