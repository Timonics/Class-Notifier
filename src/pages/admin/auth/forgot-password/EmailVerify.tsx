import { TbArrowLeft, TbMessage } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../../store/admin/authStore";
import { useAuth } from "../../../../hooks/admin/useAuth";
import Loading from "../../../../components/loader";
import { useLoadingStore } from "../../../../store/admin/loadingStore";

export default function EmailVerify() {
  const { passwordResetEmail } = useAuthStore();
  const { isLoading } = useLoadingStore();
  const { resetPassword } = useAuth();

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="size-[56px] border-[2px] border-[#344054]/30 rounded-xl flex items-center justify-center">
          <TbMessage className="text-[#344054]" size={30} />
        </div>
        <h1 className="text-3xl font-semibold poppins mt-3">
          Check your email
        </h1>
        <p className="text-[#344054] text-center">
          We sent a password reset link to <br />
          {passwordResetEmail?.email}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-center text-[#344054] font-medium">
          Didn't recieve the email?{" "}
          <span
            className="text-[#6941C6] font-semibold poppins cursor-pointer"
            onClick={() => resetPassword(passwordResetEmail!)}
          >
            Click here to resend
          </span>
        </p>
      </div>
      <Link
        to={"/admin/auth"}
        className="flex items-center gap-3 mx-auto montserrat"
      >
        <TbArrowLeft size={20} /> Back to Login
      </Link>
      {isLoading && <Loading />}
    </>
  );
}
