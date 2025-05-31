import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
      <section className="w-full pt-10 md:pt-20 max-sm:pb-10 flex flex-col justify-center items-center space-y-10 md:space-y-14">
        <img
          src="/images/class-notifier-logo.png"
          alt=""
          className="w-[9.06rem] h-[6.94rem]"
        />
        <h1 className="text-5xl montserrat font-bold">
          Your <br /> Class <br />{' '}
          <span className="text-[#B884C8]">Reminder</span> <br /> Assistant
        </h1>
        <p className="poppins text-lg w-60">
          Stay organized and never miss a class again!
        </p>
        <Link
          to="/auth"
          className=" montserrat text-xl grid place-items-center font-semibold text-[#32073F] bg-white w-[15.62rem] h-[4.38rem] rounded"
        >
          Get Started
        </Link>
      </section>
    </div>
  )
}
