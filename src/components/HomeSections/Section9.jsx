import { Link } from "react-router";

const Section9 = () => {
  return (
    <div className=" bg-gradient-to-r from-primary-hover to-green-400 text-white rounded-lg p-8 flex items-center gap-8 lg:max-h-[17rem] lg:mt-30 mt-10">
      <div className="lg:block hidden flex-1 overflow-hidden   -left-[32px] relative -top-10 h-[22rem]">
        <img
          src="/personImage/StudentSortProgram.png"
          alt="Student looking at phone"
          className="max-w-full w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-2 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">
          Choose from 140,000+ Study Programs
        </h2>
        <p className="text-lg leading-relaxed text-center lg:text-start">
          Pick your programs. Apply all at once. Built-in quality checks give
          you a ~95% chance of application success.
        </p>
        <Link
          to=""
          className="bg-white text-primary-hover border-none rounded-md py-3 px-6 text-lg font-bold cursor-pointer mt-5"
        >
          Start Your Journey
        </Link>
      </div>
    </div>
  );
};

export default Section9;
