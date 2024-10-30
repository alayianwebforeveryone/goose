import Link from "next/link";
import React from "react";
import TalentSlider from "./TalentSlider";

const TalenAcquisition = () => {
  return (
    <div>
      <div>
        {/* talent Hero Section  */}
        <div className="talent-hero-bg bg-cover overflow-hidden">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center">
            <div className="lg:text-left text-center my-4">
              <h1 className="md:text-[42px] xl:text-[50px] md:leading-[3.5rem] sm:text-4xl text-3xl  leading-[1.4] font-bold text-[#FFFFFF] mb-[20px]">
                GITTC&apos; Talent Acquisition Excellence
              </h1>
              <p className="text-[#FFFFFF] font-medium lg:max-w-[63.956%] lg:w-[62%] md:w-[55.9%] sm:w-[70%] w-[90%] md:mx-auto lg:mx-0  sm:text-base text-sm md:leading-[30px] leading-[25px] mb-[20px]"></p>
              <Link href="/contact">
                <button
                  className="btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-4 md:py-5 rounded-full"
                >
                  Contact us
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="ml-2 text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Talent Page Content  */}
        <div className="lg:pb-[50px] lg:pt-[30px] py-[20px] bg-[#F4F4F4] relative">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 ">
            <div className="p-[10px]">
              <p className="mt-2   md:text-[18px] 2xl:text-xl lg:leading-[26px] font-normal text-text-black text-justify">
                Headquartered in California, our company stands at the forefront
                of global talent sourcing, leveraging our strategic location to
                drive innovation and efficiency in recruitment. With a global
                reach, we collaborate with local partners in India, South Asia,
                and beyond to acquire diverse talent, ensuring a broad and
                inclusive approach to talent acquisition.
              </p>
              <p className="mt-2  md:text-[18px] 2xl:text-xl lg:leading-[26px] font-normal text-text-black text-justify">
                Our dedicated teams excel in identifying and securing top
                professionals across various industry verticals, including
                Business Services, Information Technology, Engineering, and
                Healthcare Consulting. Our expertise and commitment to
                excellence make us a trusted partner in the recruitment
                industry, consistently delivering industry-leading professionals
                to meet the needs of our clients.
              </p>
            </div>
          </div>
        </div>
        {/* Client Section  */}
        <div className="bg-white">
          <TalentSlider />
        </div>
      </div>
    </div>
  );
};

export default TalenAcquisition;
