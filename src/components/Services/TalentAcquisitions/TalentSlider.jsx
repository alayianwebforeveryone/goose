"use client";
import React from 'react'
import TechSliderCard from './TechSliderCard'

import client1 from '../../../../Assets/Icons/client-logo-2.jpeg'
import client2 from "../../../../Assets/Icons/client-logo-3.jpeg";
import client3 from "../../../../Assets/Icons/client-logo-4.jpeg";
import client4 from "../../../../Assets/Icons/client-logo-5.jpeg";
import client5 from "../../../../Assets/Icons/client-logo-7.jpeg";
import client6 from "../../../../Assets/Icons/client-logo-9.jpeg";
import client7 from "../../../../Assets/Icons/client-logo-10.jpg";
import client8 from "../../../../Assets/Icons/client-logo-11.jpg";
import client9 from "../../../../Assets/Icons/client-logo-12.jpg";
// import PopularServiceCard from "./PopularServiceCard";

// carousel import
// import { Card, CardContent } from "@/components/ui/";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TalentSlider = () => {
  const serviceCard = [
    {
      img: client1,

    },
    {
      img: client2,

    },
    {
      img: client3,

    },
    {
      img: client4,

    },
    {
      img: client5,

    },
    {
      img: client6,

    },
    {
      img: client9,

    },
    {
      img: client7,

    },
    {
      img: client8,

    },
   
  ];

  return (
    <div>


      <div className="mb-[50px] bg-[#ffffff] relative">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
          <div className="p-[10px]">
            <div className="mb-5 pt-2">
              <h2 className="p-[10px] text-center w-full md:text-[40px] text-[20px] font-bold">Our Clientele</h2>
              <p className="text-lg xl:text-xl font-medium text-text-black text-center -mt-3 tracking-widest">USA, UAE,
                INDIA</p>
            </div>


          </div>
        </div>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-[60%]  mx-auto flex justify-center   "
      >
        <CarouselContent >
          {serviceCard.map(({ img, title, subTitle, description, btn }, index) => (
            <CarouselItem key={index} className="md:basis-1/3  lg:basis-1/3">
              <div className="p-1">
                <TechSliderCard
                  img={img}

                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>


      </Carousel>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-[60%]  mx-auto flex justify-center   "
      >
        <CarouselContent >
          {serviceCard.slice().reverse().map(({ img }, index) => (
            <CarouselItem key={index} className="md:basis-1/3  lg:basis-1/3">
              <div className="p-1">
                <TechSliderCard
                  img={img}

                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>


      </Carousel>
    </div>
  )
}

export default TalentSlider