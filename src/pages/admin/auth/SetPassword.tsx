import { TbArrowLeft, TbLockDown, TbSelect } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function SetPassword() {
  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="size-[56px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbLockDown className="text-[#344054]" size={30} />
        </div>
        <h1 className="text-3xl font-semibold poppins mt-3">Set new password</h1>
        <p className="text-[#344054] text-center w-[75%]">
          Your new password must be different to previously used passwords.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <p className="text-sm text-[#344054] font-medium">Password</p>
          <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] pops">
            <input
              type="password"
              placeholder="Password"
              className="h-[40px] w-full outline-none placeholder:font-medium"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#344054] font-medium">Confirm Password</p>
          <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] pops">
            <input
              type="password"
              placeholder="Password"
              className="h-[40px] w-full outline-none placeholder:font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 my-2">
          <div className="flex items-center gap-2">
            <TbSelect className="border rounded-full" size={25} />
            <p className="text-[#475467]">Must be at least 8 characters</p>
          </div>
          <div className="flex items-center gap-2">
            <TbSelect className="border rounded-full" size={25} />
            <p className="text-[#475467]">Must contain one special character</p>
          </div>
        </div>
        <button className="p-2 font-semibold rounded-md bg-[#1570EF] text-white poppins">
          Reset Password
        </button>
      </div>
      <Link to={""} className="flex items-center gap-3 mx-auto montserrat">
        <TbArrowLeft size={20} /> Back to Login
      </Link>
    </>
  );
}
