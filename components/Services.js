// Importing necessary dependencies from React
import React from "react";

// Functional component Services that takes props as input
const Services = ({ largeImage, smallImage, serviceTitle, serviceInfo,titleColor,infoColor }) => {
  // Returning JSX for rendering the component
  return (
    <div className={`services w-full h-[80vh] flex flex-col justify-end items-center pb-16 px-5 bg-cover bg-center ${largeImage} ${smallImage} lg:px-44`}>
      {/* Service title displayed using props */}
      <h2 className={`service-title text-4xl ${titleColor}  font-fraunces font-extrabold mb-8`}>
        {serviceTitle}
      </h2>
      {/* Service information displayed using props */}
      <p className={`service-info text-center text-lg ${infoColor} font-barlow font-semibold`}>
        {serviceInfo}
      </p>
    </div>
  );
};

// Exporting the Services component to be used in other parts of the application
export default Services;
