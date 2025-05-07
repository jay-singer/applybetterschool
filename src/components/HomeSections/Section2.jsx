import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import "../../AllCss/SlideSection2.css";

const SlideInformation = [
  {
    Icon: "/iconsUsed/Group-8661-5-1.svg",
    Users: "1.3M +",
    Subject: "Students Helped",
    Color: "#0368ef",
  },
  {
    Icon: "/iconsUsed/Group-8661-3-1-1.svg",
    Users: "14,000+",
    Subject: "Global Programs",
    Color: "#ed2d77",
  },
  {
    Icon: "/iconsUsed/Group-8661-1-1-1.svg",
    Users: "1,500+",
    Subject: "Institutions Globally",
    Color: "#139386",
  },
  {
    Icon: "/iconsUsed/Group-8661-7.png",
    Users: "150+",
    Subject: "Nationalities",
    Color: "#d67833",
  },
  {
    Icon: "/iconsUsed/Group-8661-4.png",
    Users: "10+",
    Subject: "Years of Expertise",
    Color: "#b854f1",
  },
];

const Section2 = () => {
  const [screen, setScreen] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect(); // initial
  }, [emblaApi]);

  return (
    <section className="   w-full 2xl:mt-[2rem]  mt-5">
      <div className="lg:mt-10 ">
        <h3 className="lg:text-[30px] md:text-[26px] font-bold text-gray-600 text-center  lg:w-[500px] justify-self-center mb-5 md:mb-0 ">
          The Fastest and Easiest Way to Successfully Study Abroad
        </h3>
      </div>

      {screen ? (
        <div className="flex flex-wrap justify-center pt-10  md:gap-[25px] lg:gap-0">
          {SlideInformation.map((item, index) => (
            <div
              key={index}
              className="  lg:p-4 flex-1 lg:flex flex-col gap-2 shadow-2xl shadow-gray-200"
            >
              <img
                src={item.Icon}
                alt={item.Users}
                className="w-16 h-16 p-2 lg:p-0"
              />
              <h1
                className="text-[16px] lg:text-[25px] font-bold mt-2  p-2 lg:p-0"
                style={{ color: item.Color }}
              >
                {item.Users}
              </h1>
              <p className="text-gray-700 px-[10px] lg:px-0 pb-5">
                {item.Subject}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {SlideInformation.map((item, index) => (
                <div
                  key={index}
                  className="pt-10 gap-2 embla__slide flex flex-col items-center rounded-xl ms-[9px]"
                >
                  <img src={item.Icon} alt={item.Users} className="w-16 h-16" />
                  <h1
                    className="text-[20px] font-bold mt-2"
                    style={{ color: item.Color }}
                  >
                    {item.Users}
                  </h1>
                  <p className="text-gray-700 text-[18px] lg:px-0 pb-5">
                    {item.Subject}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 gap-2 ">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full ${
                  index === selectedIndex
                    ? " bg-primary-hover"
                    : " bg-green-200"
                }`}
              ></button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Section2;
