import { TbEdit, TbSend } from "react-icons/tb";
import { dashboardData } from "../../../dummyData/dashboardData";
import { statusColorCode } from "../../../utils/colorCode";

export default function RecentUpcomingClass() {
  const dataElements = dashboardData.map((data) => {
    const color = statusColorCode(data.status)
    return (
      <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-8 p-3 datas-center">
        <div className="text-gray-900">{data.id}</div>
        <div className="text-blue-700 col-span-2">{data.classDate}</div>
        <div className="col-span-3 ">
          <p className="text-gray-900 poppins">{data.classCourse.courseCode}</p>
          <p className="text-gray-600">{data.classCourse.courseName}</p>
        </div>
        <div className="px-2 py-1 rounded-full size-fit" style={{
          color: color,
          backgroundColor: `${color}20`,
          border: "1.5px solid" 
        }}>{data.status}</div>
        <div className="flex items-center justify-end text-gray-600">
          <TbEdit size={18}/>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold montserrat text-sm">
          Recent Listed Upcoming Class
        </p>
        <button className="flex items-center bg-[#7F56D9] text-white py-2 px-4 text-xs font-medium poppins gap-2 rounded-lg mr-4">
          <TbSend />
          All Classes
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-8 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600">
          <p className="">ID</p>
          <p className="col-span-2">Class Date</p>
          <p className="col-span-3 ">Class Course</p>
          <p className="">Status</p>
          <p></p>
        </div>
        <div className="gap-2">{dataElements}</div>
      </div>
    </div>
  );
}
