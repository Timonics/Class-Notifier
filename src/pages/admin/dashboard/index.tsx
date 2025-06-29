import { TbBell, TbUser } from "react-icons/tb";
import dashConsts from "../../../constants/dashConsts";
import RecentUpcomingClass from "./RecentUpcomingClass";
import Announcement from "./Announcement";

export default function Dashboard() {
  const dashNavs = dashConsts.map((item) => {
    const Icon = item.icon;
    return (
      <div
        className="w-full flex flex-col p-4 gap-3 text-white rounded-xl justify-center shadow-xl"
        style={{
          backgroundColor: item.color,
        }}
      >
        <div className="w-fit p-1.5 text-blue-700 rounded-md bg-white">
          <Icon size={20} />
        </div>
        <p className="text-xs">{item.name}</p>
        <p className="poppins text-lg">{item.desc}</p>
      </div>
    );
  });
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex gap-2 border-2 poppins text-gray-700 border-gray-700/30 w-fit text-xs py-1 px-3 rounded-md ml-auto items-center">
        <TbBell size={20} />
        Notification
      </div>
      <div className="flex flex-col gap-3 items-center mt-4">
        {/* <div className="flex gap-3"></div> */}
        <div className="flex gap-2 w-full">
          <div className="w-1/3 border-2 p-4 border-gray-300 rounded-xl flex flex-col gap-3 shadow-xl">
            <div className="w-fit p-1.5 border-2 border-gray-200 shadow-lg rounded-md bg-white text-blue-700">
              <TbUser size={20} />
            </div>
            <p className="text-xs font-medium">Total Students</p>
            <p className="poppins text-xl font-semibold">11235</p>
          </div>
          <div className="w-1/3 border-2 p-4 border-gray-300 rounded-xl flex flex-col gap-3 shadow-xl">
            <div className="w-fit p-1.5 border-2 border-gray-200 shadow-lg rounded-md bg-white text-blue-700">
              <TbUser size={20} />
            </div>
            <p className="text-xs font-medium">Total Courses</p>
            <p className="poppins text-xl font-semibold">1127</p>
          </div>
          <div className="w-1/3 border-2 p-4 border-gray-300 rounded-xl flex flex-col gap-3 shadow-xl">
            <div className="w-fit p-1.5 border-2 border-gray-200 shadow-lg rounded-md bg-white text-blue-700">
              <TbUser size={20} />
            </div>
            <p className="text-xs font-medium">Upcoming Classes </p>
            <p className="poppins text-xl font-semibold">405</p>
          </div>
        </div>
        <div className="flex gap-2 w-full">{dashNavs}</div>
      </div>
      <div className="flex gap-4">
        <div className="w-3/5">
          <RecentUpcomingClass />
        </div>
        <div className="w-2/5">
          <Announcement />
        </div>
      </div>
    </div>
  );
}
