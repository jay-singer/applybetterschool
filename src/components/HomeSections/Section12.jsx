import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Section12 = () => {
  return (
    <footer className="bg-[#f5f8ff] lg:pt-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 ">
        {/* Left Column */}
        <div className="md:col-span-1">
          <img
            src="/iconsUsed/Parrot rectangle logo.png" // Replace with your logo if different
            alt="ApplyBoard"
            className="mb-4 w-36"
          />
          <p className="text-gray-700">
            101 Frederick St,
            <br />
            Kitchener, ON
            <br />
            N2H 6R3
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-500">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

        {/* Middle Columns */}
        <div>
          <h3 className="font-semibold mb-2">Students</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="font-semibold">Recruitment Partners</li>
            <li className="font-semibold">Institutions</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Find Programs & Institutions</li>
            <li>360 Solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Destinations</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Australia</li>
            <li>Canada</li>
            <li>Germany</li>
            <li>Ireland</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press and Media</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Blog</li>
            <li>Webinar</li>
            <li>ApplyInsights</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#d7e6ff] mt-10 py-4 text-center text-sm text-primary-hover flex justify-between items-center px-6 md:px-12 ">
        <span>© 2025 ApplyParrot Inc</span>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Section12;
