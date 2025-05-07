import { useEffect, useState } from "react";
import { BsBookHalf } from "react-icons/bs";
import { FaRegIdBadge } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import StudentWithBook from "/personImage/StudentWithBooks.png";
import StudentWithBook1 from "/personImage/StudentWithBooks1.png";
const Section3 = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (innerWidth <= 768) {
        setIsLargeScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLargeScreen]);

  return (
    <section className="flex md:flex-row flex-col-reverse justify-between bg-white text-slate-800 lg:text-xl text-base lg:gap-10 md:gap-6 gap-5 mt-7 ">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6  lg:pe-5 md:w-1/2">
        {/** Title */}
        <p className="text-primary-hover font-semibold uppercase">
          International Students
        </p>
        {/** Heading */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold leading-tight">
          Find Your Perfect Study Program
        </h2>
        {/** Explanation */}
        <p className="text-slate-600 text-base ">
          We’ve spent a decade perfecting a faster, easier, quality-first
          international study application process. Now, the world is yours to
          explore in just a few clicks.
        </p>
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <span className=" text-primary-hover lg:text-3xl md:text-2xl text-xl">
              <BsBookHalf />
            </span>
            <span className="text-slate-600">
              Easily apply to multiple programs
            </span>
          </li>
          <li className="flex items-start gap-3 ">
            <span className=" text-primary-hover  ">
              <FaRegIdBadge className=" lg:size-7 md:size-6 size-5 " />
            </span>
            <span className="text-slate-600">
              Find your perfect program from 140,000+ options in five top
              destinations
            </span>
          </li>
          <li className="flex items-start gap-3 ">
            <span className="text-primary-hover text-5xl ">
              <MdOutlineBarChart className=" lg:size-7 md:size-6 size-5 " />
            </span>
            <span className="text-slate-600">
              Get a higher chance of success with quality checks and AI
              technology
            </span>
          </li>
        </ul>
        <button className="lg:mt-4 lg:px-6 px-3 lg:py-3 py-2 bg-primary-hover text-white rounded-lg flex justify-center items-center text-base ">
          Try It Today
        </button>
      </div>

      {/* Right Section */}
      {isLargeScreen ? (
        <div
          // style={{
          //   backgroundImage: `url(${StudentWithBook1})`,
          // }}
          className="md:w-[30rem]
          xl:w-[39rem] lg:w-[500px] 2xl:w-[600px]  xl:flex-none xl:bg-center lg:bg-left bg-cover  pt-"
        >
          <img className="w-full hw-full " src={StudentWithBook1} alt="" />
        </div>
      ) : (
        <>
          <div className="w-full md:w-1/2 ">
            <img className=" w-full" src={StudentWithBook} alt="skdjfkdj" />
          </div>
        </>
      )}
    </section>
  );
};

export default Section3;
