import { ChangeEvent, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { VscLockSmall } from "react-icons/vsc";
import { useStudentAuth } from "../../../hooks/students/useAuth";
import { useStudentAuthStore } from "../../../store/student/studentAuthStore";
import StudentLoader from "../../../components/loader/studentsLoader";

export default function AuthPage() {
  const { studentAuthIsLoading } = useStudentAuthStore();
  const { studentLogin } = useStudentAuth();
  const [activeTab, setActiveTab] = useState("signup");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignupChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="">
      <p className="poppins text-lg mx-auto w-80 pt-10 md:pt-16">
        <span className="text-[#B884C8]">Sign up</span> now to receive timely
        reminders for your courses.
      </p>
      <div className="mt-12 md:mt-20 montserrat w-[90%] md:w-[80%] mx-auto">
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
                name="username"
                value={signupData.username}
                onChange={handleSignupChange}
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
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
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
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
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
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
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
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>
            <button
              className="text-xl w-full flex items-center justify-center space-x-2  font-extrabold bg-[#8312A5] text-white h-15 rounded-2xl"
              onClick={() =>
                studentLogin({
                  email: loginData.email.toLowerCase(),
                  password: loginData.password,
                })
              }
            >
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
      {studentAuthIsLoading && <StudentLoader />}
    </section>
  );
}
