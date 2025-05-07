import { FaEdit, FaRegIdBadge } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Section8 = () => {
  return (
    <section className="pt-12">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-baseline-last b">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full ">
          <h4 className="text-primary-hover font-semibold mb-2 uppercase tracking-wide text-sm">
            RECRUITMENT PARTNERS
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How We Help Recruitment Partners
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <FaRegIdBadge className="text-primary-hover text-xl mt-1" />
              <p>Access 140,000+ programs at 1,500+ academic institutions</p>
            </div>
            <div className="flex items-start gap-3">
              <FaEdit className="text-primary-hover md:text-2xl text-xl mt-1" />
              <p>
                Use AI-powered tools to benefit from ApplyBoard’s 95%
                application success rate
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TfiWorld className="text-primary-hover lg:text-3xl text-xl mt-1" />
              <p>
                Support students with extra built-in services, from language
                tests to student loans
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to=""
              className="bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:opacity-90 inline-block"
            >
              Join Our Network
            </Link>
          </div>
        </div>
        {/* Right Side */}

        <div className="lg:w-2/3 w-full flex flex-col gap-6 ">
          {/* Top Grid with Woman Image on Right */}
          <div className="flex flex-col lg:flex-row gap-4 items-center h-full ">
            {/* Left Column (Box + Man Image) */}
            <div className=" hidden md:flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2 justify-between">
              {/* Business Man Image */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/personImage/ColleguesConversation.jpg"
                  alt="Business Man"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Nationalities Box */}
              <div className="bg-gradient-to-r from-green-400 to-primary-hover text-white rounded-xl flex flex-col items-center justify-center py-6 px-4 text-center shadow-md">
                <div className="text-4xl mb-2 ">
                  <GiGraduateCap />
                </div>
                <p className="text-2xl font-semibold">1 Millinon+</p>
                <p className="text-sm">Students helped</p>
              </div>
            </div>

            {/* Right Column (Woman Image) */}
            <div className="rounded-xl overflow-hidden shadow-md w-full md:w-2/3 lg:w-1/2 h-full">
              <img
                src="/personImage/ManLeader.png"
                alt="Woman Leader"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
