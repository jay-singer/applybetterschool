import Header from "../components/header/Header";
import Section1 from "../components/HomeSections/Section1";
import Section2 from "../components/HomeSections/Section2";
import Section3 from "../components/HomeSections/Section3";
import Section4 from "../components/HomeSections/Section4";
import Section5 from "../components/HomeSections/Section5";
import Section6 from "../components/HomeSections/Section6";

const Home = () => {
  return (
    <div className=" ">
      <Header />
      <div
        className="mx-[1rem] 2xl:mx-[2rem] lg:ms-[8rem] md:ms-[4rem]
md:me-[3rem]"
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </div>
  );
};

export default Home;
