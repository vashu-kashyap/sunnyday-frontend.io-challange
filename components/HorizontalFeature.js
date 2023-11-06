import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

// HorizontalFeature component receives props to display content and image horizontally
const HorizontalFeature = ({
  sectionTitle,
  sectionInfo,
  sectionImage,
  underlineColor,
  flexDirection,
}) => {
  return (
    // Feature section with flex layout and custom classes
    <section
      className={`feature-section flex flex-col-reverse ${flexDirection} min-h-[70vh]`}
    >
      {/* Left half of the section containing text content */}
      <div className="feature-content lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-start lg:px-28">
        {/* Title */}
        <h2 className="text-4xl text-Very-dark-desaturated-blue font-fraunces font-extrabold px-8 mt-16 mb-10 lg:text-left">
          {sectionTitle}
        </h2>
        {/* Description */}
        <p className="px-8 text-lg text-Very-dark-grayish-blue font-barlow text-center lg:text-left">
          {sectionInfo}
        </p>
        {/* Learn More link */}
        <Link
          href={"/"}
          passHref
          className={`block text-center text-lg font-fraunces uppercase my-10 underline decoration-wavy  ${underlineColor} decoration-2 lg:px-8 hover:decoration-solid transition-all ease-in-out duration-300`}
        >
          Learn More
        </Link>
      </div>
      {/* Right half of the section containing the image */}
      <div className="feature-image lg:w-1/2">
        {/* Image component with specified source, width, height, and alt text */}
        <Image
          src={sectionImage}
          width={1080}
          height={1080}
          priority
          alt="egg-image"
        />
      </div>
    </section>
  );
};

// PropTypes for type checking the props received by the component
HorizontalFeature.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionInfo: PropTypes.string.isRequired,
  sectionImage: PropTypes.string.isRequired,
  underlineColor: PropTypes.string.isRequired,
  flexDirection: PropTypes.string.isRequired,
};

// Exporting the HorizontalFeature component
export default HorizontalFeature;
