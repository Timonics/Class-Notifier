import { Link } from "react-router-dom";
import { announcements } from "../../dummyData/announcements";
import { TbX } from "react-icons/tb";

type setShowAnnouncements = {
  setShowAnnouncements: (value: React.SetStateAction<boolean>) => void;
};

export default function AnnouncementModal({
  setShowAnnouncements,
}: setShowAnnouncements) {
  const announcementsElements = announcements.map((announcement) => (
    <div className="border border-[#D0D5DD] p-4 rounded-xl flex flex-col gap-3 relative shadow-lg">
      <TbX className="absolute right-2 top-2" />
      <p className="text-sm font-bold">
        {announcement.type}{" "}
        <span className="text-[#667085] font-normal"> 2 mins ago</span>
      </p>
      <p className="text-sm text-[#344054]">{announcement.announcement}</p>
      <div className="flex items-center gap-4">
        <button className="text-[#344054] font-semibold text-sm">
          Dismiss
        </button>
        <Link
          to={"announcements"}
          className="text-sm text-[#6941C6] font-semibold"
          onClick={() => setShowAnnouncements(false)}
        >
          View Announcements
        </Link>
      </div>
    </div>
  ));
  return (
    <div className="fixed right-2 w-[337px] h-[343px] border-[1.5px] border-[#344054] z-20 rounded-md bg-white overflow-y-auto p-4 flex flex-col gap-4">
      {announcementsElements}
    </div>
  );
}
