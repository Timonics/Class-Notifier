import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center gap-5">
      <Link
        to={"../update-profile"}
        className="p-5 w-full rounded-lg montserrat font-semibold bg-[#32073F] text-white"
      >
        Edit Profile
      </Link>
      <Link
        to={"../update-program"}
        className="p-5 w-full rounded-lg montserrat font-semibold bg-[#32073F] text-white"
      >
        Change Institution/Program
      </Link>
      <Link
        to={"../update-courses"}
        className="p-5 w-full rounded-lg montserrat font-semibold bg-[#32073F] text-white"
      >
        Update Courses
      </Link>
      <button className="p-5 w-full rounded-lg montserrat font-semibold bg-[#FF0404] text-white">
        Logout
      </button>
    </div>
  );
}
