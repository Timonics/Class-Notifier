import { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../../assets/admin-class-notifier-logo.png";
import { AdminLoginData } from "../../../types/auth";
import { useAuth } from "../../../hooks/useAuth";
import Loading from "../../../components/loading";
import { Link } from "react-router-dom";
import { useLoadingStore } from "../../../store/loadingStore";

export default function AdminAuth() {
  const { adminLogin } = useAuth();
  const { isLoading } = useLoadingStore();
  const [loginData, setLoginData] = useState<AdminLoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adminLogin(loginData);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="logo" className="w-[145px] h-[111.3px]" />
        <h1 className="text-4xl font-semibold poppins">Welcome</h1>
        <p className="text-[#344054]">
          Welcome back! Please enter your details.
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="space-y-1">
          <p className="text-sm text-[#344054] font-medium">Email</p>
          <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] pops">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[40px] w-full outline-none placeholder:font-medium"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#344054] font-medium">Password</p>
          <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] pops">
            <input
              type="password"
              placeholder="Password"
              className="h-[40px] w-full outline-none placeholder:font-medium"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link
          to={"forgot-password"}
          className="text-sm text-[#1570EF] font-semibold"
        >
          Forgot password
        </Link>
        <button
          disabled={!loginData.email || !loginData.password}
          type="submit"
          className="p-2 font-semibold rounded-md bg-[#1570EF] text-white poppins disabled:bg-[#1570EF]/70 disabled:cursor-not-allowed"
        >
          Sign in
        </button>
      </form>
      {isLoading && <Loading />}
    </>
  );
}
