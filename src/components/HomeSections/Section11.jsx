import { Link } from "react-router-dom";
import { OurWork } from "../../db"; // Adjust the path as needed

const Section11 = () => {
  const getLinkPath = (title) => {
    switch (title) {
      case "Student":
        return "/signup";
      case "Recruitment Partner":
        return "/recruitment";
      case "Partener School":
        return "/becoming-partner";
      default:
        return "/";
    }
  };

  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Get Started with ApplyBoard</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {OurWork.map((item, index) => (
          <div
            key={index}
            className="group shadow-gray-300 rounded-xl shadow-md flex flex-col items-center bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="w-full overflow-hidden">
              <img
                src={item.useImage}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-start">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.decription}</p>
              <Link
                to={getLinkPath(item.title)}
                className="bg-primary-hover text-white px-4 py-2 rounded-md hover:bg-primary transition flex"
              >
                {item.linking}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section11;
