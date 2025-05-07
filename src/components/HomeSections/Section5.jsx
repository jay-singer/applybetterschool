import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../AllCss/SlideSection5.css";
import QuoteSign from "/iconsUsed/QuoteSign.png";

const testimonials = [
  {
    quote: "Like an answer from heaven",
    text: "I tried [applying to institutions] and it took months, and months, and months for me to get an answer from a school. But then I stumbled upon ApplyBoard, and it was like an answer from heaven.",
    name: "Arabelle A.",
    image: "/personImage/Testimonier1.webp", // Placeholder image
  },
  {
    quote: "All thanks to ApplyBoard",
    text: "I wanted to make my parents proud, and they are proud of me all thanks to.",
    name: "Krupali P.",
    image: "/personImage/Testimonier2.webp", // Placeholder image
  },

  // Add more testimonials here
];

const Section5 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-gray-50 py-16 relative">
      <div className="container mx-auto text-center">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800 mb-6">
          What Our Students Have to Say
        </h2>
        <p className="text-gray-600 mb-8">
          Hear from real international students about their experience.
        </p>

        <div className="">
          <div className="embla overflow-hidden h-full" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div className="embla__slide   min-w-full h-full " key={index}>
                  <div className="  p-8 px-3">
                    <img src={QuoteSign} alt="" className="mb-4 w-[28px]" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2 lg:text-center text-start">
                      {testimonial.quote}
                    </h3>
                    <p className="text-gray-600 mb-4 lg:text-center text-start">
                      {testimonial.text}{" "}
                    </p>
                    <div className="flex items-center justify-start">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-gray-800 font-semibold">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white lg:right-4 lg:top-24 right-2 md:top-[10rem] top-[15rem] transform -translate-y-1/2 space-x-2 flex">
        <button
          className={` shadow-md shadow-gray-300 rounded-s-mdpy-2 px-3  ${
            !prevBtnEnabled ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <IoIosArrowBack className="lg:size-7 h-full" />
        </button>
        <button
          className={` shadow-md shadow-gray-300 rounded-e-md py-2 px-3  ${
            !nextBtnEnabled ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <IoIosArrowForward className="lg:size-7 h-full" />
        </button>
      </div>
    </div>
  );
};

export default Section5;
