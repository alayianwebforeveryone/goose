import React from "react";
import ConsultingCard from "./ConsultingCard";
import db from "../../../../Assets/Icons/db.svg";
import edit from "../../../../Assets/Icons/edit.svg";
import message from "../../../../Assets/Icons/message.svg";
import suport from "../../../../Assets/Icons/Suport.svg";
import reload from "../../../../Assets/Icons/reload.svg";
import Link from "next/link";

const TechConsulting = () => {
  const consultCardContent = [
    {
      title: "Business Case Studies",
      description:
        "Our Team Can Help You Understand Your Business Portfolio And Policies And Help Provide A Detailed Case Study Of Your Business Processe",
      img: edit,
    },
    {
      title: "Business System Process Refinement",
      description:
        "We Can Collaborate With You To Review Your Existing Business Practices And Suggest You The Industry Standard And Most Suitable Re-Engineered Process Get The Max Out Of Your Team And Software Applications.",
      img: reload,
    },
    {
      title: "Requirement Gathering And Documentation",
      description:
        "Documentation All Business Teams Have Expertise In Their Respective Business Processes But Documenting The Process As Requirement Into IT Lingo, To Get The Right Application Can Be Quite A Tricky Job. That's Where Our Experts Can Help You Build A Comprehensive Requirement Documents To The Minute Details To Get You The Best Solutions For Your Needs",
      img: message,
    },
    {
      title: "Solution Shortlisting",
      description:
        "WThere Are Tons Of Cloud Or On-Prem Applications In Market To Cater To Your Specific Needs, But It's Hard To Choose What Suits You The Best In Terms Of Budget, Timeline And Delivering All The Requirements Calls Out For An Expert Opinion, And That's Where We Stand To Help You Choose What's Best For Your Business.",
      img: db,
    },
    {
      title: "Implementation Support",
      description:
        "Implementing A Software Solution Requires A Whole Team Of Specialists In Solution Architecture, Business And Application Analysis And Application Admins And Support Staff. Acquiring Such Talent Can Be A Tremendous Undertaking, While We Can Help Out Ease The Pain Of Going Throughout Implementation And Transitioning To The Business And IT Teams.",
      img: suport,
    },
  ];

  return (
    <div className="relative bg-bg-color">
      <div className="technology-cons-hero-bg bg-cover overflow-hidden">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center">
          <div className="lg:text-left text-center my-4">
            <h1 className="md:text-[42px] xl:text-[50px] md:leading-[3.5rem] sm:text-4xl text-3xl  leading-[1.4] font-bold text-[#000000] mb-[20px]">
              Technology Consulting
            </h1>
            <p className="text-[#000000] text-justify md:text-center font-medium lg:max-w-[70%] lg:w-[62%] md:w-[65%] sm:w-[70%] w-[100%] md:mx-auto lg:mx-0  sm:text-base text-sm md:leading-[30px] leading-[25px] mb-[20px]">
              At Goose ITTC, We Believe That Technology Should Be Used To Drive
              Business Growth And Success. Our Technology Consulting Services
              Are Designed To Help Businesses And Organizations Stay Ahead Of
              The Curve And Make The Most Of The Latest Technology Advancements.
              Our Team Of Experts Will Work Closely With You To Understand Your
              Needs And Provide Customized Technology Solutions That Will Help
              You Achieve Your Goals.
            </p>
            <Link href="/Contact">
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
      {/* banner end here */}
      <div className="my-[50px] bg-bg-color relative">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
          <div className="p-[10px]">
            <div className="mb-5">
              <h2 className="p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold">
                What Do We Offer
              </h2>
            </div>
            <div className="text-[#000000] text-[30px] text-center">
              <h6 className="text-xl font-bold leading-[30px] text-text-black">
                At Goose ITTC, We Offer Consulting Services At Various Stages Of
                A Solution Implementation.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
    

      <div className="grid place-content-center   gap-y-5  sm:grid-cols-2 lg:w-[100%]   gap-8 justify-center pt-2 md:px-12 lg:px-24 " >

        {consultCardContent.map(({ title, img, description }, index) => {
          return (
            <div key={index} className="mt-8 " >
            <ConsultingCard title={title} img={img} description={description} />
          </div>
          );
        })}
      </div>

      {/* bottom strip */}
      <div className="my-[50px] bg-bg-color relative ">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-3">
            <div className="md:rounded-[6px_0px_0px_6px]  rounded-[6px] p-[40px_30px] lg:p-[60px_40px] relative overflow-hidden bg-[#FFFFFF] hover:bg-[#1a73e9] group transition-all duration-[0.4s] ease-out">
              <span className="">
                <div className="absolute right-[-50px] top-[-50px] w-[137px] h-[137px] bg-blue opacity-[0.1] rounded-full group-hover:bg-[#FFFFFF] z-[1] transition-all duration-[0.4s] ease-out"></div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-[25px] text-blue absolute top-[25px] right-[20px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </span>
              <p className="max-w-[270px] text-base leading-[30px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out">
                Creative Approaches To Tackle Your Most Pressing Challenges
              </p>
              <h4 className="text-2xl font-bold leading-[34px] mb-1 group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out">
                Strategic Planning
              </h4>
            </div>
            <div className="rounded-[6px] md:rounded-none p-[40px_30px] lg:p-[60px_40px] relative overflow-hidden bg-[#FFFFFF] hover:bg-[#1a73e9] group transition-all duration-[0.4s] ease-out">
              <span className="">
                <div className="absolute right-[-50px] top-[-50px] w-[137px] h-[137px] bg-blue opacity-[0.1] rounded-full group-hover:bg-[#FFFFFF] z-[1] transition-all duration-[0.4s] ease-out"></div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-[25px] text-blue absolute top-[25px] right-[20px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </span>
              <h4 className="text-2xl font-bold leading-[34px] mb-1 group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out">
                Strategic Planning
              </h4>
              <p className="max-w-[270px] text-base leading-[30px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out">
                Creative Approaches To Tackle Your Most Pressing Challenges
              </p>
            </div>
            <div className="md:rounded-[0px_6px_6px_0px] rounded-[6px] p-[40px_30px] lg:p-[60px_40px] relative overflow-hidden bg-[#FFFFFF] hover:bg-[#1a73e9] group transition-all duration-[0.4s] ease-out">
              <span className="">
                <div className="absolute right-[-50px] top-[-50px] w-[137px] h-[137px] bg-blue opacity-[0.1] rounded-full group-hover:bg-[#FFFFFF] z-[1] transition-all duration-[0.4s] ease-out"></div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-[25px] text-blue absolute top-[25px] right-[20px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </span>
              <h4 className="text-2xl font-bold leading-[34px] mb-1 group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out">
                Strategic Planning
              </h4>
              <p className="max-w-[270px] text-base leading-[30px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out">
                Creative Approaches To Tackle Your Most Pressing Challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConsulting;
