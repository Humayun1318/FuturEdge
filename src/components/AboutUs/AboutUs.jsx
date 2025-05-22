import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 sm:px-8 ">
      <div
        className="max-w-4xl mx-auto text-center  p-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-[#007BFF]">Futur</span>{" "}
          <span className="text-[#28A745]">Edge</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to <span className="text-[#007BFF]">Futur</span>{" "}
          <span className="text-[#28A745]">Edge</span> – Your Career Compass. We
          empower your journey with personalized guidance, expert insights, and
          the latest tools to shape your future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To democratize career counseling with scalable, AI-enhanced tools
              and a network of industry experts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Technology
            </h3>
            <p className="text-gray-600">
              Built with React, Tailwind CSS, and Firebase for a seamless,
              secure, and dynamic user experience.
            </p>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
          <a href="#service">Join Now</a>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
