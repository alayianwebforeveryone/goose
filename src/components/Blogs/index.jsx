import React from "react";
import IndividualBlog from "./IndividualBlog";
import bridgingGap from "../../../Assets/images/Article1.jpg";
import jobSeeker from "../../../Assets/images/Article2.jpg";
import talentAcquisition from "../../../Assets/images/Article3.jpg";
import course from "../../../Assets/images/Article4.jpg";
import Calinifornia from "../../../Assets/images/Article5.jpg";
import ai from "../../../Assets/images/Article6.jpg";
import Link from "next/link";

const Blogtitles = () => {
  const blogContent = [
    {
      title: "Our Role: Bridging the Gap Between Companies and Top Talent",
      date_time: "By August 10, 2024 | April 17, 2024",
      img: bridgingGap,
      content: "",
    },
    {
      title: "The Struggles of Job Seekers: Finding the Perfect Fit",
      date_time: "By Team GITTC | July 26, 2024",
      img: jobSeeker,
      content: "",
    },
    {
      title: "Talent Acquisition Trends: What's Shaping the Industry?",
      date_time: "By Team GITTC | July 23, 2024",
      img: talentAcquisition,
      content: "",
    },
    {
      title: "Navigating the AI Revolution: Where Humans and Algorithms Tang",
      date_time: "By Team GITTC | July 24, 2024",
      img: ai,
      content: "",
    },
    {
      title:
        "Charting a Course for Tomorrow: The UAE's Ministries of the Future",
      date_time: "By Team GITTC | June 26, 2024",
      img: course,
      content: "",
    },
    {
      title: "Weighing in on California’s ‘Right to Disconnect’ Bill",
      date_time: "By Team GITTC | April 17, 2024",
      img: Calinifornia,
      content: "",
    },
  ];

  return (
    <div>
      <div className="relative bg-bg-color">
        <div className="blog-bg bg-cover overflow-hidden after:h-[620px] after:md:h-[420px] mb-10">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center">
            <div className="px-2">
              <ul className="mb-[10px] flex flex-row text-[#FFFFFF] gap-x-5">
                <li className="font-bold text-lg">
                  <Link
                    className="mr-[20px] transition duration-[0.4s] cursor-pointer"
                    href="/"
                  >
                    Home
                  </Link>
                  <span>|</span>
                </li>
                <li className="list-none font-bold text-lg text-blue">Blogs</li>
              </ul>
              <h1 className="text-[70px] md:leading-[80px]  text-start leading-[1.4] lg:font-bold font-semibold text-[#FFFFFF]">
                Blogs
              </h1>
            </div>
          </div>
        </div>

        {/* blogs start here */}
        <div className="grid place-content-center   gap-y-5  sm:grid-cols-2 lg:w-[100%]   gap-8 justify-center pt-2 md:px-12 lg:px-24 " >
        {blogContent.map(({ title, date_time, img, content }, index) => {
          return (
            <div 
            key={index}
            >
              <IndividualBlog
                title={title}
                date_time={date_time}
                img={img}
                content={content}
              />

            </div>
          );
        })}

</div>
      </div>
    </div>
  );
};

export default Blogtitles;
