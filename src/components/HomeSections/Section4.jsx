import StudentWithBook from "/personImage/StudentWithBook.png";
const Section4 = () => {
  return (
    <div className="bg-[#f3f8f5] lg:py-20   mt-10 ">
      <div className="container mx-auto text-center">
        {/* Top Section */}
        <div className="mb-8 md:mb-12 ">
          <p className="text-xl lg:text-2xl font-semibold text-primary-hover uppercase tracking-wider mb-4 text-start md:text-center">
            360 SOLUTIONS
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl mb-4 md:text-center text-start">
            Find Every Solution, From Applications to Accommodations
          </h2>
          <p className="text-gray-600 leading-relaxed   md:text-xl xl:text-2xl w-full md:text-center text-start">
            Access our full 360 Solutions, covering everything from application
            to arrival. Get instant language test vouchers, explore financial
            services, and invest in your future with flexible student loans.
            It's all here.
          </p>
          <button className="bg-primary-hover hover:bg-primary text-white font-bold py-3 px-6 rounded-md mt-6">
            Register Now
          </button>
        </div>

        {/* Circular Layout Section */}

        <div className="">
          <img
            src={StudentWithBook} // Replace with your actual image path
            alt="Smiling Student"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
