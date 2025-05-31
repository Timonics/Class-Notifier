import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbNotification } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnnouncementModal from "../announcement-modal";
import { useAuthStore } from "../../store/authStore";

export default function Nav() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [showAnnouncements, setShowAnnouncements] = useState<boolean>(false);

  return (
    <div className="flex justify-between mt-5">
      <div
        className="rounded-full size-[30px] flex items-center justify-center bg-[#32073F] text-white cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <MdKeyboardArrowLeft />
      </div>
      {isAuthenticated && (
        <div className="flex items-center gap-3">
          <p className="text-sm montserrat">Welcome, Obafemi</p>
          <div className="size-[24px] rounded-full bg-[#D9D9D9]" />
          <TbNotification
            className="cursor-pointer"
            onClick={() => {
              setShowAnnouncements(!showAnnouncements);
            }}
          />
        </div>
      )}
      {showAnnouncements && (
        <>
          <div className="fixed inset-0 z-10 backdrop-blur-xs" onClick={() => setShowAnnouncements(false)}/>
          <AnnouncementModal setShowAnnouncements={setShowAnnouncements}/>
        </>
      )}
    </div>
  );
}
