import React from "react";
import Image from "next/image";

const TestimonialCard = ({
  clientImage,
  testimonial,
  clientName,
  clientWork,
}) => {
  return (
    <div className="testimonial-card w-full lg:w-1/3 flex flex-col justify-center items-center">
      <div className="client-img my-8 lg:my-12">
        <Image
          src={clientImage}
          width={1080}
          height={1080}
          className="w-16 rounded-full"
          alt="emily.R"
        />
      </div>
      <div className="testimonial-content flex flex-col justify-center items-center">
        <p className="client-testimonial text-lg text-Very-dark-grayish-blue font-barlow text-center px-8 mb-8 lg:mb-12">
          {testimonial}
        </p>
        <h3 className="client-name text-xl text-Very-dark-desaturated-blue font-fraunces font-extrabold">
          {clientName}
        </h3>
        <h4 className="client-work text-lg text-Grayish-blue font-barlow capitalize font-normal my-2 lg:my-4">
          {clientWork}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
