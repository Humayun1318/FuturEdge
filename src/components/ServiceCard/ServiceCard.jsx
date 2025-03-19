import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service.service_name
);
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      <img
        src={service.image}
        alt={service.service_name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{service.service_name}</h2>
        <p className="text-sm text-gray-500">{service.category}</p>

        <div className="mt-3">
          <p className="text-gray-700">
            <span className="font-medium">Counselor:</span> {service.counselor}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Pricing:</span> ${service.pricing}
          </p>
        </div>

        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
