import React, { useContext, useEffect, useState } from "react";
import {
  FaRegChartBar,
  FaLightbulb,
  FaUsers,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { FDataContext } from "../../context/Context";

const USPDetails = () => {
  const [uspCardDetails, setUSPCardDetails] = useState(null);
  const { id } = useParams();
  const { data } = useContext(FDataContext);

  useEffect(() => {
    if (data?.USP.length) {
      const selectedCard = data?.USP.find(
        (card) => Number(card.id) === Number(id)
      );
      setUSPCardDetails(selectedCard);
    }
  }, [id, data]);

  if (!uspCardDetails) {
    return <p>Loading usp details card</p>;
  }

  const { title, description, impact, benefits, applicability, icon } =
    uspCardDetails;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div
        className="shadow-sm rounded-2xl"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6">
          <div className="flex items-center space-x-4">
            <img
              src={icon}
              alt="Industry Insights"
              className="h-16 w-16 object-contain bg-white p-2 rounded-lg"
              loading="lazy"
            />
            <h1 className="text-3xl font-bold text-white font-lora-heading">
              {title}
            </h1>
          </div>
        </div>

        {/* Card Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  p-4 lg:p-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <FaRegChartBar className="h-6 w-6 mr-2" />
                Strategic Impact
              </h2>
              <p className="text-gray-600 leading-relaxed">{impact}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <FaLightbulb className="h-6 w-6 mr-2" />
                Core Benefits
              </h2>
              <ul className="space-y-3">
                {benefits?.split(".").map(
                  (benefit, index) =>
                    benefit && (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <FaArrowUp className="h-5 w-5 text-green-600 mt-1 mr-2" />
                        {benefit.trim()}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Comprehensive Analysis
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                {description}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                <FaUsers className="h-6 w-6 mr-2" />
                Target Audience
              </h2>
              <div className="">
                <p className="bg-white px-4 py-2  text-sm font-medium text-gray-700 ">
                  {applicability}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <span className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center font-poppins-specialEle">
              Download Report
              <FaDownload className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPDetails;
