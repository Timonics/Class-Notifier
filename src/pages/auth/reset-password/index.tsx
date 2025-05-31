import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'

export default function ResetPassword() {
  return (
    <section className="pt-20 md:pt-52 h-screen px-8 md:px-12">
      <p className="poppins text-sm text-center text-[#FF0404]">
        A reset password link has been sent to your email. Use it to update your
        password
      </p>
      <div className="mt-12 montserrat space-y-6">
        <h1 className="font-extrabold text-center   text-[#32073F] text-3xl">
          Reset Password
        </h1>
        <div className="relative">
          <FiUser
            className="absolute left-4 top-1/2 -translate-y-1/2 "
            color="#D9D9D9"
            size={20}
          />
          <input
            className="placeholder:text-[#D9D9D9] focus:outline-none  border border-[#32073F80] text-[#32073F] w-full placeholder:text-lg h-14 pl-12 pr-4 bg-white"
            placeholder="Enter your email"
          />
        </div>

        <button className="  text-xl w-full flex items-center justify-center space-x-2  font-extrabold bg-[#32073F] text-white h-15 rounded-2xl">
          Reset
          <MdKeyboardArrowRight size={35} />
        </button>
      </div>
    </section>
  )
}
