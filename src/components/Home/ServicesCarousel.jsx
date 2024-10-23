
"use client";
import consultant from "../../../Assets/images/Consulting.jpg";
import implementation from "../../../Assets/images/Implementation.jpg";
import softDev from "../../../Assets/images/SoftDev.jpg";
import training from "../../../Assets/images/Training.jpg";
import talent from "../../../Assets/images/Talent.jpeg";
import PopularServiceCard from "./PopularServiceCard";

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

const PopularServicesSlider = () => {
  const serviceCard = [
    {
      img: consultant,
      title: "Technology Consultant",
      subTitle: "Expert Advise",
      description:
        "Our Team Of Experts Will Work Closely With You To Understand Your Needs And Provide Customized Technology Solutions And Guidance That Will Help You Achieve Your Business Goals.",
      btn: "Review",
    },
    {
      img: softDev,
      title: "Software Development",
      subTitle: "Custom Legacy Strategy",
      description:
        " Our Team Of Experts Will Work Closely With You To Understand Your Needs And Provide Customized Technology Solutions And Guidance That Will Help You Achieve Your Business Goals.",
      btn: "Review Solution",
    },
    {
      img: implementation,
      title: "Your Implementation Partner",
      subTitle: "Bridging the Gap",
      description:
        "Full life time implementation on Major Cloud Plateform i.e SAB, Oracle, Ibp. Cloud",
      btn: "Explore",
    },
    {
      img: talent,
      title: "Talent Acquisition",
      subTitle: "Talent Acquisition Strategy",
      description:
        "Strategic hiring Approach: Leveraging in-depth market knowledge to meet precise client needs.",
      btn: "Explore",
    },
    {
      img: training,
      title: "Technology Training",
      subTitle: "Interactive Instructor-Led Training",
      description:
        "Help You and Your Team Stay Up To Date With The Latest Technology Advancement",
      btn: "Training Option",
    },
  ];

  return (
    <Carousel
    plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto bg-[#F4F4F4]  "
    >
      <CarouselContent >
        {serviceCard.map(({img,title,subTitle,description,btn}, index) => (
          <CarouselItem key={index} className="md:basis-1/3 bg-[#F4F4F4]  lg:basis-1/3">
            <div className="p-1">
             <PopularServiceCard 
             img = {img}
             title = {title}
             subTitle = {subTitle}
             description = {description}
             btn = {btn}
             />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default PopularServicesSlider;
