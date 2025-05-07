import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Btn from "../reUsableComp/Btn";
import "./Header.css";

const Header = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [list1Show, setList1Show] = useState(false);
  const [list2Show, setList2Show] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 763);

  // Update layout based on window width
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 763);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setMobileToggle((prev) => !prev);
  const toggleListOne = () => setList1Show((prev) => !prev);
  const toggleListTwo = () => setList2Show((prev) => !prev);
  const setActiveLink = (name) => setActiveNavLink(name);
  return (
    <header className=" fixed mx-auto max-w-[var(--breakpoint-xl)] w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 md:py-2 flex justify-between items-center bg-white relative ">
        {isDesktop ? (
          <>
            {/* Logo */}
            <div className=" lg:ms-0 ms-20 text-primary ">
              <img
                className="lg:h-[70px] h-[70px] w-[180px] lg:w-[250px] object-cover"
                src="/iconsUsed/Parrot rectangle logo.png "
                alt=""
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6 font-medium text-text1 px-2 flex-1 justify-end items-center lg:pe-15">
              <NavLink
                to="/students"
                className="hover:text-[var(--color-primary-hover)] navTitle"
              >
                Students
              </NavLink>

              <div className="navTitle dropDown1">
                <span className="flex items-end gap-[2px]">
                  <span className="hover:text-[var(--color-primary-hover)]">
                    Study Destinations
                  </span>
                  <IoIosArrowDown />
                </span>

                <ul className="list shadow-md border border-gray-200">
                  {[
                    "Germany",
                    "Austraria",
                    "Canada",
                    "Ireland",
                    "United Kingdom",
                    "United States",
                  ].map((item) => (
                    <li key={item} className="text-nowrap mb-3">
                      <NavLink>{item}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navTitle dropDown1">
                <span className="flex items-end gap-[2px]">
                  <span className="hover:text-[var(--color-primary-hover)]">
                    Parterners
                  </span>
                  <IoIosArrowDown />
                </span>

                <ul className="list shadow-md border border-gray-200">
                  <li className="text-nowrap mb-3">
                    <NavLink>Institutions</NavLink>
                  </li>
                  <li className="text-nowrap">
                    <NavLink>Recruitment Partner</NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3  w-[17%]">
              <NavLink className="w-full bg-amber-100" to="/register">
                <Btn
                  dataInform={{ title: "Register" }}
                  btnTheme={{
                    backGround: "bg-white",
                    textColor: "text-[var(--color-primary)]",
                    borderColor: "border-[var(--color-primary)]",
                    hovering: {
                      backGround: "bg-[var(--color-primary)]",
                      textColor: "text-[var(--color-primary)]",
                    },
                  }}
                />
              </NavLink>
              <NavLink className="w-full" to="/login">
                <Btn
                  dataInform={{ title: "Log in" }}
                  btnTheme={{
                    backGround: "bg-[var(--color-primary)]",
                    textColor: "text-white",
                    borderColor: "[var(--color-primary)]",
                    hovering: {
                      backGround: "bg-white",
                      textColor: "text-black",
                    },
                  }}
                />
              </NavLink>
            </div>
            {/* Mobile Menu Button */}

            <div className="  lg:hidden block pe-2 py-4">
              <button
                onClick={toggleMobileMenu}
                className="cursor-pointer flex justify-center items-center"
              >
                {mobileToggle ? (
                  <span>
                    <MdClose className="size-9 text-primary" />
                  </span>
                ) : (
                  <span>
                    <FaBars className="size-9 text-primary" />
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Nav */}
            <div
              className={`absolute bg-white shadow-lg right-0 left-0 p-5 max-w-[var(--breakpoint-xl)] z-0 ${
                mobileToggle ? "animate show" : "animate hide"
              }`}
            >
              <nav className="flex flex-col space-y-2 font-[400]">
                <NavLink
                  onClick={() => setActiveLink("student")}
                  className={`ps-5 py-4 md:text-xl text-text1 rounded-xl ${
                    activeNavLink === "student" ? "border border-bgColor" : ""
                  }`}
                >
                  Student
                </NavLink>

                {/* Student Destinations Toggle */}
                <div className="cursor-pointer overflow-hidden">
                  <button
                    onClick={() => {
                      toggleListOne();
                      setActiveLink("studentDestinations");
                    }}
                    className={`ps-5 text-start py-4 md:text-xl text-text1 w-full ${
                      activeNavLink === "studentDestinations"
                        ? "border border-bgColor"
                        : ""
                    }`}
                  >
                    Student Destinations
                  </button>
                  <ul
                    className={`flex flex-col gap-3 md:text-xl text-text1 rounded-lg bg-white border border-gray-300 shadow-md ${
                      list1Show ? "animateListOne show" : "animateListOne hide"
                    }`}
                  >
                    {[
                      "Australia",
                      "Canada",
                      "Ireland",
                      "Germany",
                      "United States",
                      "United Kingdom",
                    ].map((item) => (
                      <NavLink key={item} className="ms-4 py-1">
                        {item}
                      </NavLink>
                    ))}
                  </ul>
                </div>

                {/* Partners Toggle */}
                <div className="cursor-pointer overflow-hidden">
                  <button
                    onClick={() => {
                      toggleListTwo();
                      setActiveLink("partners");
                    }}
                    className={`ps-5 text-start py-4 md:text-xl text-text1 w-full ${
                      activeNavLink === "partners"
                        ? "border border-bgColor"
                        : ""
                    }`}
                  >
                    Partners
                  </button>
                  <ul
                    className={`flex flex-col gap-3 md:text-xl text-text1 rounded-lg bg-white border border-gray-300 shadow-md ${
                      list2Show ? "animateListTwo show" : "animateListTwo hide"
                    }`}
                  >
                    <NavLink className="ms-4 mt-4">Institutions</NavLink>
                    <NavLink className="ms-4 mb-4">Recruitment Partner</NavLink>
                  </ul>
                </div>
              </nav>
            </div>
          </>
        ) : (
          <div className=" flex justify-between w-full px-2 py-3">
            <div className="flex justify-center items-center gap-3">
              {/** Home Toggling  */}
              <div className="">
                <button
                  onClick={toggleMobileMenu}
                  className="cursor-pointer flex justify-center items-center"
                >
                  {mobileToggle ? (
                    <span>
                      <MdClose className="md:size-8 size-5 text-primary" />
                    </span>
                  ) : (
                    <span>
                      <FaBars className="md:size-8 size-5 text-primary" />
                    </span>
                  )}
                </button>
              </div>
              {/* Logo */}
              <div className="">
                <img
                  src="/iconsUsed/Parrot round logo .png"
                  alt=""
                  className=" h-[50px] w-[50px] 
                   object-center"
                />
              </div>
            </div>
            <div className="">
              <img
                src="iconsUsed/profile.png"
                alt=""
                className=" h-[30px] w-[30px]"
              />
            </div>

            {/* Mobile Nav */}
            <div
              className={`absolute bg-white mt-[8px] border border-gray-300 shadow-lg right-0 left-0 p-5 max-w-[var(--breakpoint-xl)] z-0 ${
                mobileToggle ? "animate show" : "animate hide"
              }`}
            >
              <nav className="flex flex-col space-y-2 font-[400]">
                <NavLink
                  onClick={() => setActiveLink("student")}
                  className={`ps-5 py-4 md:text-xl text-text1 rounded-xl ${
                    activeNavLink === "student" ? "border border-bgColor" : ""
                  }`}
                >
                  Student
                </NavLink>

                {/* Student Destinations Toggle */}
                <div className="cursor-pointer overflow-hidden">
                  <button
                    onClick={() => {
                      toggleListOne();
                      setActiveLink("studentDestinations");
                    }}
                    className={`ps-5 text-start py-4 md:text-xl text-text1 w-full ${
                      activeNavLink === "studentDestinations"
                        ? "border border-bgColor"
                        : ""
                    }`}
                  >
                    Student Destinations
                  </button>
                  <ul
                    className={`flex flex-col gap-3 md:text-xl text-text1 rounded-lg bg-white border border-gray-300 shadow-md ${
                      list1Show ? "animateListOne show" : "animateListOne hide"
                    }`}
                  >
                    {[
                      "Australia",
                      "Canada",
                      "Ireland",
                      "Germany",
                      "United States",
                      "United Kingdom",
                    ].map((item) => (
                      <NavLink key={item} className="ms-4 py-1">
                        {item}
                      </NavLink>
                    ))}
                  </ul>
                </div>

                {/* Partners Toggle */}
                <div className="cursor-pointer overflow-hidden">
                  <button
                    onClick={() => {
                      toggleListTwo();
                      setActiveLink("partners");
                    }}
                    className={`ps-5 text-start py-4 md:text-xl text-text1 w-full ${
                      activeNavLink === "partners"
                        ? "border border-bgColor"
                        : ""
                    }`}
                  >
                    Partners
                  </button>
                  <ul
                    className={`flex flex-col gap-3 md:text-xl text-text1 rounded-lg bg-white border border-gray-300 shadow-md ${
                      list2Show ? "animateListTwo show" : "animateListTwo hide"
                    }`}
                  >
                    <NavLink className="ms-4 mt-4">Institutions</NavLink>
                    <NavLink className="ms-4 mb-4">Recruitment Partner</NavLink>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
