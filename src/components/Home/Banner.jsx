import React from "react";
const Banner = () => {
  return (
    <div class="relative">
      <div class="home-hero-bg z-[-1] md:h-[calc(100vh-150px)] h-[calc(100vh-110px)] "></div>
      <div class="w-[100%] h-[100%] absolute top-0 left-0 bottom-0 bg-[#00000080] z-[1]"></div>
      <a
        class="text-center flex justify-center absolute items-center md:p-[50px] cursor-pointer z-[2] top-0 left-0 right-0 bottom-0 m-auto"
        href="/contact"
      >
        <div
          class="flex flex-col max-w-full aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <div class="sm:text-xl text-[15px] text-[#FFFFFF] text-center font-bold uppercase mb-[30px] mt-5 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
            what we do
          </div>
          <div class="md:text-[60px] text-[35px] leading-[1.4] text-center font-bold text-[#FFFFFF] mb-[40px] md:leading-[5rem] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
            IT Consulting, Bespoke Development, Implementation, Training and
            Support Services
          </div>
          <button
            class="uppercase text-base font-bold text-[#fff] rounded-[50px] bg-blue px-[24px] py-[12px] xl:px-[40px] xl:py-[20px] cursor-pointer
                        hover:text-[#000000] self-center hover:bg-white transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </a>
    </div>
  );
};

export default Banner;
