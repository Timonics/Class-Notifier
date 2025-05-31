import { announcements } from "../../dummyData/announcements";

export default function AnnouncementPage() {
  const announcementsElements = announcements.map((announcement) => (
    <div className="border border-[#D0D5DD] p-4 rounded-xl flex flex-col gap-3 relative shadow-lg">
      <p className="text-sm font-bold">
        {announcement.type}{" "}
        <span className="text-[#667085] font-normal"> 2 mins ago</span>
      </p>
      <p className="text-sm text-[#344054]">{announcement.announcement}</p>
    </div>
  ));

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="bg-[#32073F1A] w-[90%] h-[71px] flex items-center justify-center gap-3 px-4 rounded-[5px]">
        <div
          className={`h-[37px] w-full rounded-[5px] montserrat flex text-white font-medium text-sm items-center justify-center 
              bg-[#32073F]
            }`}
        >
          Announcements
        </div>
      </div>
      <div className="w-full p-2 pt-4 space-y-1">
        <p className="montserrat text-[#32073F] text-center font-semibold">
          Upcoming Classes
        </p>
        <p className="text-[#32073FCF] montserrat text-center font-normal text-xs">
          Find the list of the all upcoming class for the week
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-2 mb-[35px]">
        {announcementsElements}
      </div>
    </div>
  );
}
