import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <div>

      {/* header section of about page  */}
      <div className="relative">
        <div className="about-hero-bg md:px-[120px] py-[100px] px-4">
          <div className="md:w-[70%] ">
            <h1 className="md:text-[52px] md:leading-[3.5rem] sm:text-[28px] text-xl text-start leading-[1.4] lg:font-bold font-semibold text-text-black mb-[40px]">
              Your One-Stop Solution For Consulting And Training Needs
            </h1>
            <a href="https://gooseittc.com/contact">
              <button
                className="btn-sub btn-one z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                          overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-5 rounded-full"
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
            </a>
          </div>
        </div>
      </div>

      {/* about section of about page  */}
      <div className="relative bg-bg-color md:px-[120px] md:py-[100px]  py-[70px] w-full">
        <div className="xl:max-w-[1140px] lg:max-w-[1024px]  flex  ">
          <div className="w-full px-[30px]">
            <div className="text-center mb-5 pb-[50px]">



            <span className="relative uppercase font-bold pl-[55px] text-lg inline-block mb-[10px] text-blue-500 text-center 
                    before:content-[''] before:absolute before:w-[44px] before:h-[1px] before:bg-blue-500 before:top-[4px] before:left-0 
                    after:content-[''] after:absolute after:w-[44px] after:h-[3px] after:bg-blue-500 after:bottom-[10px] after:left-0 
                    hover:text-green transition-colors duration-300">
       ABOUT
   </span>

              <h2 className="md:text-[50px] font-bold text-3xl text-text-black">
                Our Company
              </h2>
            </div>
            <div>
              <p className="text-base leading-[30px]  ">
                Are You Looking For A Reliable And Trustworthy Partner To Help You
                With Your Software And Training Needs? Do You Want To Get The Best
                Value For Your Money And Time? If Yes, Then Look No Further Than Goose
                ITTC, The Company That Will Provide You With A One-Stop Solution For
                All Your Technology-Related Challenges.
              </p>
              <p className="text-[16px] leading-[30px]">
                Goose ITTC Is A Company Based In California, With A Team Of
                Experienced Professionals Who Provide Clients With The Best Possible
                Services And Solutions In The Field Of Technology Consulting, Software
                Implementation, Customized Interactive Instructor-Led Training, And
                Software. Whether You Need To Upgrade Your Existing Software,
                Implement A New System, Train Your Staff On How To Use It Effectively,
                Or Develop A Custom Software Solution For Your Specific Needs, Goose
                ITTC Has Got You Covered.
              </p>
            </div>
          </div>
        </div>
      </div>


      <Card />
    </div>
  );
};

export default About;
