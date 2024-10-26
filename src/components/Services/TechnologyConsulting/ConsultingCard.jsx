import Image from "next/image";
import React from "react";

const ConsultingCard = ({img, title, description}) => {
  return (
    <div className="bg-[#FFFFFF]   h-full border-solid border border-[#E7E7E7] transition-all duration-[0.6s] mx-[5px] p-5 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded-[30px]">
      <div className="block  text-center text-[#343434]">
        <div className="bg-blue rounded-full p-2 mb-[15px] text-[30px] text-center flex justify-center items-center w-[65px] h-[65px] mx-auto">
         <Image src = {img} alt = "icon" />
        </div>
        <div className="">
          <h3 className="text-[25px] leading-[40px] font-bold text-text-black">
            {title}
          </h3>
          <p className="text-[17px] leading-[30px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ConsultingCard;
