
"use client";

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
import Image from 'next/image';

const TechSliderCard = ({img}) => {
 

  return (
    <div className="relative lg:w-[80%]  flex  pt-8 flex-col    text-gray-700 ">
   
      <Image src={img} alt="img-blur-shadow"  width={80} height={80} />
    
    
  </div>
  );
};

export default TechSliderCard;
