import { TbAnchor, TbSearch } from "react-icons/tb";
import { Outlet } from "react-router-dom";

export default function Department() {
  return (
    <div className="flex flex-col p-4 gap-6 mt-5">
      <h1 className="text-3xl poppins font-semibold text-gray-950">
        Department
      </h1>
      <div className="mt-5 flex p-4 gap-4 rounded-xl items-center w-full bg-gray-100">
        <div className="space-y-1 w-full">
          <p className="text-[13px] text-[#344054] font-semibold">
            Search for Department
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 pl-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] poppins bg-white w-2/3">
              <TbSearch className="h-full w-[20px] text-sm text-black/30" />
              <input
                placeholder="Search"
                className="w-[150px] xl:w-[170px] h-[40px] outline-none placeholder:text-sm placeholder:font-medium"
              />
            </div>
            <div className="flex bg-green-500 gap-2 rounded-full items-center py-2 px-1 poppins justify-center text-white w-1/3">
              <TbAnchor />
              <p className="text-[10px] font-medium">Download CSV</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5"><Outlet /></div>
    </div>
  );
}
