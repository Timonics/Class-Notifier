import { TbArrowLeft, TbMessage } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ResetPasswordSuccess() {
  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="size-[56px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbMessage className="text-[#344054]" size={30} />
        </div>
        <h1 className="text-3xl font-semibold poppins mt-3">Password Reset</h1>
        <p className="text-[#344054] text-center w-[80%]">
        Your password has been successfully reset. Click below to log in magically.
        </p>
      </div>
      <button className="p-2 font-semibold rounded-md bg-[#1570EF] text-white poppins">
          Continue
        </button>
      <Link to={""} className="flex items-center gap-3 mx-auto montserrat">
        <TbArrowLeft size={20} /> Back to Login
      </Link>
    </>
  );
}
