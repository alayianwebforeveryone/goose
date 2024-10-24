import Link from "next/link";
import React from "react";





const About = () => {
  return (
    <div>

      <div>
        <div className="relative">
          <div className="about-hero-bg md:px-[120px] py-[100px] px-4">
            <div className="md:w-[70%]">
              <h1 className="md:text-[45px] md:leading-[3.5rem] sm:text-[28px] text-xl text-start leading-[1.4] lg:font-bold font-semibold text-black mb-[40px]">
                Your One-Stop Solution For Consulting And Training Needs</h1><a href="https://gooseittc.com/contact"><button className="btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-5 rounded-full">Contact us<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="ml-2 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                  </svg></button></a>
            </div>
          </div>
        </div>
        <div className="relative bg-bg-color md:py-[100px] py-[70px] w-full">
          <div className="xl:max-w-[1140px] lg:max-w-[1024px] flex mx-auto px-4">
            <div className="w-full">
              <div className="text-center mb-5 pb-[50px]"><span className="relative uppercase font-bold pl-[55px] inline-block mb-[14px] text-blue text-center
                        before:absolute before:w-[40px] before:h-[2px] before:bg-blue before:top-[6px] before:left-0
                        after:absolute after:w-[40px] after:h-[2px] after:bg-blue after:bottom-[6px] after:left-0 text-base">ABOUT</span>
                <h2 className="md:text-[42px] font-bold text-3xl text-text-black">Our Company</h2>
              </div>
              <div>
                <p className="text-base leading-[30px]">Are You Looking For A Reliable And Trustworthy Partner To Help You
                  With Your Software And Training Needs? Do You Want To Get The Best Value For Your Money And Time? If
                  Yes, Then Look No Further Than Goose ITTC, The Company That Will Provide You With A One-Stop
                  Solution For All Your Technology-Related Challenges.</p>
                <p className="text-base leading-[30px]">Goose ITTC Is A Company Based In California, With A Team Of
                  Experienced Professionals Who Provide Clients With The Best Possible Services And Solutions In The
                  Field Of Technology Consulting, Software Implementation, Customized Interactive Instructor-Led
                  Training, And Software. Whether You Need To Upgrade Your Existing Software, Implement A New System,
                  Train Your Staff On How To Use It Effectively, Or Develop A Custom Software Solution For Your
                  Specific Needs, Goose ITTC Has Got You Covered.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
 
{/* <AccordianComponent/> */}

    </div>
  );
};

export default About;
