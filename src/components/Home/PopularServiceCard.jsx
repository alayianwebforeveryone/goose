import Image from "next/image";
import React from "react";

const PopularServiceCard = ({ title, subTitle, description, img, btn }) => {
  return (
    <>
      {/* component */}
      <div className="relative lg:w-[80%]  flex  h-[500px] [400px] pt-8 flex-col rounded-xl bg-[#F4F4F4] bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <Image src={img} alt="img-blur-shadow" layout="fill" />
        </div>
        <div className="p-6 flex-1">
          {/* Flex-1 ensures it grows if necessary */}
          <h5 className="mb-2 block font-sans text-xl font-extrabold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <h6 className="mb-2 block font-sans text-lg text-[#898989] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {subTitle}
          </h6>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-blue py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            {btn}
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularServiceCard;
