import { TbEye, TbSend } from "react-icons/tb";
import { dashboardAnnouncementData } from "../../../dummyData/announcements";

export default function Announcement() {
  const aElements = dashboardAnnouncementData.map((item) => (
    <div className="border-b-2 font-medium text-[10px] border-gray-200 grid grid-cols-4 p-3 items-center">
      <div className="text-gray-900">{item.date}</div>
      <div className="col-span-2">
        <p className="text-gray-900 poppins">{item.alertMessage.title}</p>
        <p className="text-gray-600">{item.alertMessage.message}</p>
      </div>
      <div className="flex items-center justify-end text-gray-600">
        <TbEye size={20} />
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-sm montserrat">Announcements</p>
        <button className="flex items-center bg-[#F52D56] text-white py-2 px-4 text-xs font-medium poppins gap-2 rounded-lg">
          <TbSend />
          All Alerts
        </button>
      </div>
      <div className="flex flex-col border-2 rounded-lg border-gray-200">
        <div className="grid grid-cols-4 font-medium text-xs p-3 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg text-gray-600">
          <p className="">Date</p>
          <p className="col-span-2">Alert Message</p>
          <p className=""></p>
          <p></p>
        </div>
        <div className="gap-2">{aElements}</div>
      </div>
    </div>
  );
}
