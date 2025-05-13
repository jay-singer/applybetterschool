import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Header from "../components/header/Header";
import Section1 from "../components/HomeSections/Section1";
import Section10 from "../components/HomeSections/Section10";
import Section11 from "../components/HomeSections/Section11";
import Section12 from "../components/HomeSections/Section12";
import Section2 from "../components/HomeSections/Section2";
import Section3 from "../components/HomeSections/Section3";
import Section4 from "../components/HomeSections/Section4";
import Section5 from "../components/HomeSections/Section5";
import Section6 from "../components/HomeSections/Section6";
import Section7 from "../components/HomeSections/Section7";
import Section8 from "../components/HomeSections/Section8";
import Section9 from "../components/HomeSections/Section9";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 100,
      interval: 200,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-[1rem] 2xl:mx-[2rem] lg:ms-[8rem] md:ms-[4rem] md:me-[3rem] space-y-8">
        <div className="reveal  relative z-20">
          <Section1 />
        </div>
        <div className="reveal">
          <Section2 />
        </div>
        <div className="reveal">
          <Section3 />
        </div>
        <div className="reveal">
          <Section4 />
        </div>
        <div className="reveal">
          <Section5 />
        </div>
        <div className="reveal">
          <Section6 />
        </div>
        <div className="reveal">
          <Section7 />
        </div>
        <div className="reveal">
          <Section8 />
        </div>
        <div className="reveal">
          <Section9 />
        </div>
        <div className="reveal">
          <Section10 />
        </div>
        <div className="reveal">
          <Section11 />
        </div>
        <div className="reveal">
          <Section12 />
        </div>
      </div>
    </div>
  );
};

export default Home;
