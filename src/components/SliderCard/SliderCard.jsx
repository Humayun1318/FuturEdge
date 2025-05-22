import { useContext, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FDataContext } from "../../context/Context";

const SliderCard = () => {
  const { data } = useContext(FDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data?.sliders.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === data?.sliders.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="bg-[#1E3A34] text-white rounded-xl flex flex-col gap-6 items-center justify-center w-[95%] mx-auto py-8"
      data-aos="zoom-in-down"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">
          <span className="text-blue-400">Trusted</span> by leading startups
        </h2>
        <p className="text-gray-300 mt-2 max-w-4xl">
          We take pride in being the go-to choice for innovative startups,
          providing tailored solutions that drive success. Our expertise,
          industry insights, and commitment to excellence have earned the trust
          of emerging businesses worldwide. From personalized guidance to
          cutting-edge strategies, we empower startups to scale, innovate, and
          achieve their goals with confidence.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-2xl overflow-hidden ">
        {/* Slider Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data?.sliders.map((slider) => (
            <div key={slider.id} className="min-w-full px-4">
              <div className="bg-[#F1F5E1] p-6 rounded-lg shadow-lg text-black h-64 flex flex-col justify-between ">
                <div className="text-blue-600 text-3xl">“</div>
                <p className="text-gray-800 italic">{slider.quote}</p>
                <hr className="my-2 border-gray-400" />
                <div className="flex items-center gap-3">
                  <img
                    src={slider.image}
                    alt={slider.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="text-blue-600 font-semibold">
                      {slider.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{slider.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {data?.sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCard;
