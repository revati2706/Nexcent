import React, { useEffect, useState } from "react";
import heroImg from "../assests/img/heroImg.png";
import Right from "../assests/icons/Right.png";
import Left from "../assests/icons/Left.png";

const Hero = () => {
  const slider = [
    {
      heading: "Lessons and insights",
      buzzword: "from 8 years",
      subHeading:
        "Where to grow your business as a photographer: site or social media?",
      img: heroImg,
      btn: "Register",
    },
    {
      heading: "Grow your business",
      buzzword: "with AI tools",
      subHeading:
        "Discover how artificial intelligence can transform your photography business and increase revenue.",
      btn: "Learn More",
    },
    {
      heading: "Social media",
      buzzword: "strategies",
      subHeading:
        "Learn effective social media marketing techniques to attract more clients and grow your audience.",
   
      btn: "Learn More",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slider.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slider.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);

  return (
    <section className="relative min-h-[600px] w-full flex justify-center items-center bg-[#f5f7fa] px-5 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-10 lg:left-1/4 z-20"
      >
        <img
          src={Left}
          className="border-2 border-[#4baf4f] rounded-full p-2 hover:scale-110 transition"
          alt="Left"
        />
      </button>

      {/* Slides */}
      {slider.map((i, idx) => (
        <main
          key={idx}
          className={`absolute top-20 left-0 flex flex-col md:flex-row md:text-center items-center justify-center gap-10 w-full h-full transition-all duration-700 ease-in-out ${
            idx === currentSlide
              ? "opacity-100 translate-x-0 z-10"
              : "opacity-0 translate-x-full z-0"
          }`}
        >
          <div className="flex flex-col gap-8 text-center items-center md:items-center md:text-center px-10">
            <div className="font-[Inter] flex flex-col gap-3">
              <h1 className="text-2xl md:text-4xl font-bold">{i.heading}</h1>
              <h1 className="text-2xl md:text-4xl font-bold text-[#4baf4f]">
                {i.buzzword}
              </h1>
              <h2 className="text-sm md:text-md text-stone-600">
                {i.subHeading}
              </h2>
            </div>

            <button className="p-4 w-[150px] bg-[#4baf4f] rounded-lg text-white font-bold border-2 border-[#4baf4f] hover:text-[#4baf4f] hover:bg-transparent transition-all">
              {i.btn}
            </button>
          </div>
        {i.img ? ( <img
            src={i.img}
            alt=""
            className="w-[300px] md:w-[400px] lg:w-[500px] object-contain"
          />):(<div></div>)}
         
        </main>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-10 flex gap-3">
        {slider.map((_, indx) => (
          <button
            key={indx}
            onClick={() => setCurrentSlide(indx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === indx
                ? "bg-[#4baf4f] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-10 lg:right-1/4 z-20"
      >
        <img
          src={Right}
          className="border-2 text-[#4baf4f] border-[#4baf4f] rounded-full p-2 hover:scale-110 transition"
          alt="Right"
        />
      </button>
    </section>
  );
};

export default Hero;





