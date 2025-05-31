import { ChangeEvent, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Nav from "../../components/nav";
import { useNavigate } from "react-router";
import { TbUser } from "react-icons/tb";

import updateIcon from "../../assets/update-icon.png";
import { FiMail, FiPhoneCall, FiUser, FiUsers } from "react-icons/fi";

export default function MyProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    fullName: "",
    phoneNumber: "",
    gender: "",
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="flex flex-col gap-7">
      <Nav />
      <div className="poppins text-lg mx-auto w-80 space-y-4">
        <p className="text-2xl text-[#B884C8]">Create Profile</p>
        <p>Let's get your basic profile</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[100.8px] h-[98.22px] border rounded-full relative bg-[#FCFCFC] flex items-center justify-center text-black">
          <TbUser size={50} />
          <img
            src={updateIcon}
            className="w-[25.6px] h-[24.95px] absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px]">Full Name</p>
          <div className="relative">
            <input
              className="border rounded-md w-full h-12 bg-[#FCFCFC] placeholder:text-black/30 placeholder:text-sm placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 pl-4 outline-none text-black/80 text-base"
              placeholder="First name and Last name"
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
            />
            <FiUser
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px]">Phone Number</p>
          <div className="relative">
            <input
              className="border rounded-md w-full h-12 bg-[#FCFCFC] placeholder:text-black/30 placeholder:text-sm placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 pl-4 outline-none text-black/80 text-base"
              placeholder="Mobile"
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleChange}
            />
            <FiPhoneCall
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px]">Gender</p>
          <div className="relative">
            <input
              className="border rounded-md w-full h-12 bg-[#FCFCFC] placeholder:text-black/30 placeholder:text-sm placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 pl-4 outline-none text-black/80 text-base"
              placeholder="Gender"
              type="text"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
            />
            <FiUsers
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <div className="w-[90%] space-y-3">
          <p className="text-start text-[16px]">Email</p>
          <div className="relative">
            <input
              className="border rounded-md w-full h-12 bg-[#FCFCFC] placeholder:text-black/30 placeholder:text-sm placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 pl-4 outline-none text-black/80 text-base"
              placeholder="Email"
              type="text"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
            <FiMail
              className="absolute top-1/2 right-2 -translate-y-1/2"
              color="#757575"
            />
          </div>
        </div>
        <button
          className="flex cursor-pointer items-center gap-2 p-2 w-[90%] justify-center rounded-md mt-2 font-extrabold text-[21px] montserrat bg-[#8312A5] text-white"
          onClick={() => {
            navigate("/customize-class");
          }}
        >
          Next
          <MdKeyboardArrowRight className="" />
        </button>
      </div>
    </section>
  );
}
