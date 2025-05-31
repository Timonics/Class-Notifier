import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { VscLockSmall } from "react-icons/vsc";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <section className="">
      <p className="poppins text-lg mx-auto w-80 pt-10 md:pt-16">
        <span className="text-[#B884C8]">Sign up</span> now to receive timely
        reminders for your courses.
      </p>
      <div className="mt-12 md:mt-20 montserrat  w-[95%]  md:w-[70%] mx-auto">
        <div className=" font-extrabold text-3xl  mb-12 flex justify-between ">
          <button
            className={`${
              activeTab === "signup"
                ? "text-[#8312A5] border-b-3  border-[#8312A5] "
                : "text-[#B884C899]"
            } pb-2.5 focus:outline-none `}
            onClick={() => setActiveTab("signup")}
          >
            Sign-up
          </button>
          <button
            className={`${
              activeTab === "login"
                ? "text-[#8312A5] border-b-3  border-[#8312A5]"
                : "text-[#B884C899]"
            } pb-2.5  focus:outline-none`}
            onClick={() => setActiveTab("login")}
          >
            Log-in
          </button>
        </div>
        {activeTab === "signup" ? (
          <div className=" font-medium mb-10 md:mb-32 space-y-6">
            <div className="relative">
              <FiUser
                className="absolute left-4 top-1/2 -translate-y-1/2 "
                color="#D9D9D9"
              />
              <input
                className="placeholder:text-[#D9D9D9] rounded-2xl  focus:outline-none text-[#32073F] w-full text-base  placeholder:text-lg h-14 pl-12 pr-4 bg-white"
                placeholder="Username"
              />
            </div>
            <div className="relative">
              <FiUser
                className="absolute left-4 top-1/2 -translate-y-1/2 "
                color="#D9D9D9"
              />
              <input
                className="placeholder:text-[#D9D9D9]  focus:outline-none text-[#32073F]  rounded-2xl w-full text-base  placeholder:text-lg h-14 pl-12 pr-4 bg-white"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <VscLockSmall
                className="absolute left-4 top-1/2 -translate-y-1/2 "
                color="#D9D9D9"
              />
              <input
                className="placeholder:text-[#D9D9D9]  focus:outline-none text-[#32073F]  rounded-2xl w-full  text-base placeholder:text-lg h-14 pl-12 pr-4 bg-white"
                placeholder="Password"
              />
            </div>

            <button className="  text-xl w-full flex items-center justify-center space-x-2  font-extrabold bg-[#8312A5] text-white h-15 rounded-2xl">
              Sign up
              <MdKeyboardArrowRight size={35} />
            </button>
          </div>
        ) : (
          <div className="font-medium  mb-10 md:mb-32  space-y-6">
            <div className="relative">
              <FiUser
                className="absolute left-4 top-1/2 -translate-y-1/2 "
                color="#D9D9D9"
              />
              <input
                className="placeholder:text-[#D9D9D9] rounded-2xl  focus:outline-none text-[#32073F] w-full text-base  placeholder:text-lg h-14 pl-12 pr-4 bg-white"
                placeholder="Username"
              />
            </div>

            <div className="relative">
              <VscLockSmall
                className="absolute left-4 top-1/2 -translate-y-1/2 "
                color="#D9D9D9"
              />
              <input
                className="placeholder:text-[#D9D9D9]  focus:outline-none text-[#32073F]  rounded-2xl w-full  text-base placeholder:text-lg h-14 pl-12 pr-4 bg-white"
                placeholder="Password"
              />
            </div>
            <button className="  text-xl w-full flex items-center justify-center space-x-2  font-extrabold bg-[#8312A5] text-white h-15 rounded-2xl">
              Login
              <MdKeyboardArrowRight size={35} />
            </button>
          </div>
        )}
        {activeTab === "signup" ? (
          <p className="font-medium text-sm">
            🔁 Forgot your password?{" "}
            <Link to="/auth/reset-password" className="text-[#F95A2C]">
              Reset it here.
            </Link>
          </p>
        ) : (
          <p className="font-medium text-sm">
            📢 New here?{" "}
            <button
              onClick={() => setActiveTab("signup")}
              className="text-[#F95A2C]"
            >
              Sign up now.
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
