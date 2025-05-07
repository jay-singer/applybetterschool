import { useEffect, useState } from "react";
import { partnerData } from "../../db";
import PartnerInformation from "../smallerComponents/parternInformation";

const countries = [
  { name: "Australia", img: "/assets/flagImage/Australia.png" },
  { name: "Canada", img: "/assets/flagImage/Canada.png" },
  { name: "Germany", img: "/assets/flagImage/Germany.png" },
  { name: "Ireland", img: "/assets/flagImage/Ireland.png" },
  { name: "United Kingdom", img: "/assets/flagImage/United-kingdom.png" },
  { name: "United States", img: "/assets/flagImage/United-states.png" },
];

const Section6 = () => {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [partnerInformation, setPartnerInformation] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    // Simulate an API call or data retrieval
    setTimeout(() => {
      const selectedCountryData = partnerData.find(
        (data) => data.country === selectedCountry
      );
      setPartnerInformation(selectedCountryData?.colleges || {});
      setLoading(false);
    }, 10); // Simulate a 0.5-second loading time
  }, [selectedCountry]);

  const currentColleges = partnerInformation;

  return (
    <div className="px-6 py-10">
      <h2 className="lg:text-center text-primary-hover text-sm font-semibold uppercase tracking-wide mb-2">
        Trusted Partners
      </h2>
      <h1 className="lg:text-center lg:text-3xl md:text-2xl text-xl  font-bold text-gray-800 mb-6">
        Trusted by 1,500+ Universities, Colleges, <br /> and Schools Worldwide
      </h1>

      {/* Country Selection */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 mb-10">
        {countries.map((country) => (
          <button
            key={country.name}
            className={`flex items-center gap-2 ps-2 py-1 border rounded-full transition w-full cursor-pointer ${
              selectedCountry === country.name
                ? "bg-primary-hover text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedCountry(country.name)}
          >
            <img src={country.img} alt={country.name} className="w-5 h-5" />
            {country.name}
          </button>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <div className="text-center text-gray-500">Loading institutions...</div>
      ) : (
        <>
          {/* Colleges Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(currentColleges).length > 0 ? (
              Object.entries(currentColleges).map(([key, college]) => (
                <div
                  key={key}
                  className="bg-white rounded-t-2xl overflow-hidden rounded-b-2xl md:rounded-b-none  shadow-lg"
                >
                  <PartnerInformation college={college} />
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No colleges found for {selectedCountry}.
              </div>
            )}
          </div>

          {/* Button */}
          <div className="text-center md:mt-10 mt-7 flex justify-center">
            <button className="bg-primary-hover text-white md:px-6 px-3 py-2 lg:py-3  rounded hover:bg-primary transition cursor-pointer">
              Explore More {selectedCountry} Institutions
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Section6;
