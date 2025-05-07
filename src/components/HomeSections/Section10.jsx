import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../AllCss/Section10.css";
import { Questions } from "../../db";

const Section10 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 gap-6">
      {/* Left Section */}
      <div className="lg:w-1/3">
        <h1 className="text-primary-hover md:text-xl text-lg font-bold mb-2">
          FAQ'S
        </h1>
        <h2 className="lg:text-3xl text-xl font-bold text-gray-700 mb-4">
          Got Questions? We Have Answers
        </h2>
        <p className="text-gray-600 lg:text-xl md:text-md text-base">
          Still wondering about studying abroad, and how ApplyBoard can get you
          there? Read these answers to our most commonly asked questions.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3">
        {Questions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-md shadow-sm mb-2 overflow-hidden"
          >
            <button
              className="flex justify-between items-end w-full py-3 px-4 font-semibold text-left focus:outline-none lg:text-xl text-[16px] text-gray-700 "
              onClick={() => toggleAccordion(index)}
            >
              <span className="w-[90%]">{item.title}</span>
              <IoIosArrowDown
                className={`size-6 transition-transform  duration-300 transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`accordion-content ${
                openIndex === index ? "show" : "hide"
              } px-4 pb-4  bg-white`}
            >
              <p className="text-gray-600 lg:text-xl text-lg">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section10;
