import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
const countries = [
  { name: "Australia", img: "/assets/flagImage/Australia.png" },
  { name: "Canada", img: "/assets/flagImage/Canada.png" },
  { name: "Germany", img: "/assets/flagImage/Germany.png" },
  { name: "Ireland", img: "/assets/flagImage/Ireland.png" },
  { name: "United Kingdom", img: "/assets/flagImage/United-kingdom.png" },
  { name: "United States", img: "/assets/flagImage/United-states.png" },
];

const SearchingSchool = () => {
  const [selectedCountry, setSelectedCountry] = useState("Germany");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };
  return (
    <section className=" bg-linear-to-r from-primary-hover to-bgColor h-full w-full px-5 lg:rounded-3xl rounded-2xl  lg:py-8 py-5 flex flex-col items-center lg:gap-8 gap-4">
      <p className=" text-white lg:text-[40px] md:text-[32px] text-[25px] font-[400] ">
        <b className="mr-3">18 million</b>
        searches and counting
      </p>
      <div className="flex w-full gap-4 flex-col md:flex-row">
        <div className="bg-white flex items-center flex-1 px-3 py-2 rounded-md gap-3">
          <IoSearch className=" text-gray-700 lg:size-[30px] size-[20px]" />
          <input
            type="text"
            name=""
            id=""
            className="w-full lg:text-[18px] outline-none"
            placeholder="What would you like to study? (e.g., low)"
          />
        </div>

        <div
          className="bg-white flex items-center justify-between px-3 py-2 rounded-md cursor-pointer shadow  relative flex-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2 md:text-[18px]   text-[17px]">
            <TfiWorld />
            <span>{selectedCountry}</span>
          </div>
          <span className="text-gray-500">
            <IoIosArrowDown size={20} />
          </span>
          {isOpen && (
            <div className="absolute z-10  bg-white rounded-md shadow-md  overflow-y-auto border border-gray-300 w-full top-13 left-0 lg:text-[18px] text-[15px]">
              <p className="px-4 py-2 font-semibold text-gray-600 ">
                Search by Destination Country
              </p>
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(country.name)}
                >
                  <img className="w-[20px]" src={country.img} alt="flag" />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="bg-white md:w-[14%]  py-2 rounded-lg lg:text-[20px] text-[18px]  text-primary">
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchingSchool;
