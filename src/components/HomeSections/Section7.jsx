import { FaRegIdBadge } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Section7 = () => {
  return (
<<<<<<< HEAD
    <section className="lg:pt-12">
=======
    <section className="pt-12">
>>>>>>> ef233d33e9ff0a4a4eddbd1a3b6a887e41c0054b
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Channel Partners
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-baseline-last b">
        {/* Left Side */}
        <div className="lg:w-2/3 w-full flex flex-col gap-6 ">
          {/* Top Grid with Woman Image on Right */}
          <div className="flex flex-col lg:flex-row gap-4 items-center h-full ">
            {/* Left Column (Box + Man Image) */}
            <div className="hidden md:flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2 justify-between">
              {/* Nationalities Box */}
              <div className="bg-gradient-to-b from-primary to-primary-hover text-white rounded-xl flex flex-col items-center justify-center py-6 px-4 text-center shadow-md">
                <div className="text-4xl mb-2 ">
                  <TfiWorld />
                </div>
                <p className="text-2xl font-semibold">150+</p>
                <p className="text-sm">Student Nationalities</p>
              </div>
              {/* Business Man Image */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/personImage/partenerMan.jpg"
                  alt="Business Man"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Column (Woman Image) */}
            <div className="rounded-xl overflow-hidden shadow-md w-full md:w-2/3 lg:w-1/2 h-full">
              <img
                src="/personImage/WomanLeader.png"
                alt="Woman Leader"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full ">
          <h4 className="text-primary-hover font-semibold mb-2 uppercase tracking-wide text-sm">
            Partners Institutions
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How We Help Partner Institutions
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <TfiWorld className="text-primary-hover text-xl mt-1" />
              <p>
                Diversify your enrolment with students from 150+ nationalities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaRegIdBadge className="text-primary-hover text-xl mt-1" />
              <p>
                Receive higher quality applications and improve conversion by
                10%
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TfiWorld className="text-primary-hover lg:text-3xl text-xl mt-1" />
              <p>
                Leverage proven technology to save time and reduce manual
                processing by 40%
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to=""
              className="bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:opacity-90 inline-block"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
