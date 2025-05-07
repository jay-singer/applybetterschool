const ParternInformation = ({ college }) => {
  if (!college) return null;

  const { collegePic, collegeLogo, collegeDisc, collegeLocation } = college;
  console.log(college);

  const truncatedDisc =
    collegeDisc.length > 300
      ? collegeDisc.substring(0, 300) + "..."
      : collegeDisc;

  return (
    <div className="h-full">
      <img
        src={collegePic}
        alt="College Visual"
        className="w-full object-cover object-center"
      />
      <div className="flex items-center mt-4  px-2">
        <img
          src={collegeLogo}
          alt="College Logo"
          className="w-10 h-12 object-contain mr-3"
        />
        <div>
          <p className="text-sm text-gray-600">{collegeLocation}</p>
        </div>
      </div>

      <p className="mt-2 pb-4  px-2  text-gray-700 text-sm">{truncatedDisc}</p>
    </div>
  );
};

export default ParternInformation;
