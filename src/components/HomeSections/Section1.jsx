import { useEffect, useState } from "react";
import BigImage from "../../assets/bigImage/Group-9966-1-1-1.webp";
import Btn from "../reUsableComp/Btn";
import SearchingSchool from "../smallerComponents/searchingSchool";

const Section1 = () => {
  const [showRightSection, setShowRightSection] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowRightSection(window.innerWidth >= 768); // show only for md and up
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // listen for resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);
  return (
    <div className="md:pt-[94px] pt-[66px]   w-full lg:h-[810px] xl:h-[780px] relative  md:h-[580px]">
      <div
        style={{
          background: "",
        }}
        className="bg-linear-to-l  from-PaleGreen  to-white rounded-xl h-full  flex md:justify-center   relative md:flex-row flex-col"
      >
        {/** Left Section */}
        <section
          className="flex flex-col  w-full items-center md:items-start 
        "
        >
          {/** Header */}
          <div className="lg:text-[3rem] text-[32px] text-nowrap font-bold flex flex-col  lg:mb-7 md:mb-4 lg:mt-20 mt-13">
            <h2 className="text-bg">Your Future Goes</h2>
            <h2 className="text-primary">Beyond Borders</h2>
          </div>
          {/** Explanations */}
          <div className="lg:text-[20px] lg:mb-8  text-base mb-4 md:text-start text-center">
            <p className="lg:leading-7 md:leading-6 font-[400]  lg:w-[85%] w-full">
              Explore 1,500+ global universities and colleges. Submit your best
              possible application with a 95% success rate. Unlock your full
              potential with ApplyBoard!
            </p>
          </div>
          {/** Register Button */}
          <div className="md:w-[170px] w-full ">
            <Btn
              dataInform={{ title: "Register Now" }}
              btnTheme={{
                backGround: "bg-[var(--color-primary)]",
                textColor: "text-white",
                borderColor: "border-[var(--color-primary)]",
                hovering: {
                  backGround: "bg-[var(--color-primary)]",
                  textColor: "text-[var(--color-primary)]",
                },
              }}
            />
          </div>
        </section>
        {/** Right Section */}
        {/* Right Section - Hidden on small screens */}
        {showRightSection && (
          <section className=" md:relative overflow-hidden w-full">
            <img
              src={BigImage}
              alt=""
              className="w-full lg:w-[73rem] absolute lg:-right-14 md:-right-20 lg:top-3 top-5"
            />
          </section>
        )}
        {!showRightSection && (
          <section className="  h-fit  lg:top-[36rem] md:top-[27rem] md:w-[77%] lg:w-[79%] rounded-3xl mt-5 md:10 lg:mt-0 ">
            <SearchingSchool />
          </section>
        )}
      </div>

      {/** Bottom section */}
      {showRightSection && (
        <section className=" md:absolute  h-fit  xl:top-[36rem]  lg:top-[38rem] md:top-[27rem] md:w-[90%] lg:w-[93%] 2xl:w-[89%] rounded-3xl ">
          <SearchingSchool />
        </section>
      )}
    </div>
  );
};

export default Section1;
