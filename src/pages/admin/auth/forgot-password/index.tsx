import { ChangeEvent, useState } from "react";
import { TbArrowLeft, TbKey } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../../store/admin/authStore";
import { ResetEmail } from "../../../../types/auth";
import { useAuth } from "../../../../hooks/admin/useAuth";
import Loading from "../../../../components/loader";
import { useLoadingStore } from "../../../../store/admin/loadingStore";

export default function AdminForgotPassword() {
  const { resetPassword } = useAuth();
  const { setPasswordResetEmail } = useAuthStore();
  const {isLoading} = useLoadingStore()
  const [resetEmail, setResetEmail] = useState({
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResetEmail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitEmail = (email: ResetEmail) => {
    resetPassword(email);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="size-[56px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbKey className="text-[#344054]" size={30} />
        </div>
        <h1 className="text-3xl font-semibold poppins mt-3">
          Forgot Password?
        </h1>
        <p className="text-[#344054]">
          No worries, we’ll send you reset instructions.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <p className="text-sm text-[#344054] font-medium">Email</p>
          <div className="flex items-center gap-1 px-2 h-[40px] rounded-lg border-[1.5px] border-[#D0D5DD] pops">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[40px] w-full outline-none placeholder:font-medium"
              name="email"
              value={resetEmail.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          disabled={!resetEmail.email}
          className="p-2 font-semibold rounded-md bg-[#1570EF] disabled:bg-[#1570EF]/50 disabled:cursor-not-allowed text-white poppins"
          onClick={() => {
            setPasswordResetEmail(resetEmail);
            handleSubmitEmail(resetEmail);
          }}
        >
          Reset Password
        </button>
      </div>
      <Link
        to={"/admin/auth"}
        className="flex items-center gap-3 mx-auto montserrat"
      >
        <TbArrowLeft size={20} /> Back to Login
      </Link>
      {
        isLoading && <Loading />
      }
    </>
  );
}

