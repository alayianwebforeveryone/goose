
import React, { useState, useEffect } from "react";
import stop from "../../../Assets/Icons/close.svg";
import Image from "next/image";
import article1 from "../../../Assets/images/Article1.jpg";

const BlogDetails = ({ isVisible, close }) => {
  // State for theme, default is light
  const [theme, setTheme] = useState("light");

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply theme to the document when theme state changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Prevent background scroll when modal is open
    if (typeof window !== "undefined") {
      document.body.style.overflow = isVisible ? "hidden" : "auto";
    }
  }, [theme, isVisible]);

  const handleClose = (e) => {
    if (e.target.id === "container") close();
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        id="container"
        onClick={handleClose}
        className="fixed inset-0 z-50 bg-red-500 bg-opacity-50 flex justify-center items-center"
      >
        <div className="relative w-[95%] bg-gray-100 dark:bg-gray-900 h-[95%] hideScrollbar mx-auto text-gray-900 dark:text-gray-100 rounded-xl overflow-y-auto">
          <div className="px-4 py-6">
            <header className="mb-6 mt-5 bg-gray-100 dark:bg-gray-900 sticky w-full top-2 flex justify-between">
              <div>
                <h1 className="sm:text-lg md:text-4xl text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  The Struggles of Job Seekers: Finding the Perfect Fit
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By Team GITTC | July 26, 2024
                </p>
              </div>
              <div className="flex justify-center gap-4 items-center">
                <div>
                  {/* Theme Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={`${
                      theme === "light"
                        ? " bg-[#111827] text-white border-black "
                        : " bg-gray-100 text-gray-900  border-white"
                    } text-xl px-3 border-2 rounded-lg font-semibold w-[83px] h-[45px]`}
                  >
                    {theme === "light" ? "Dark" : "Light"}
                  </button>
                </div>
                <div onClick={close}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-900 dark:text-white" // Added dynamic color styling for SVG
                  >
                    <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                    <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </header>

            <div>
              <Image
                src={article1}
                alt="Hero"
                className="w-full h-72 object-cover rounded-lg mb-6"
              />
            </div>

            <p className="lg:mb-8 mb-5 mt-3 py-1 dark:text-white">
              In today’s competitive job market, finding the perfect job can
              feel like searching for a needle in a haystack. Job seekers face
              numerous challenges that can make the process daunting and
              stressful. Let’s explore some of the common hurdles candidates
              encounter and how they can overcome them.
            </p>
            <article className="prose prose-lg text-gray-900 dark:text-gray-200 prose-invert">
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>1.</span> Confusing Application Processes
                </h2>
                <p>
                  Navigating through complex and lengthy application forms can
                  be frustrating. Many job seekers find themselves lost in a
                  maze of requirements and steps. Simplifying your resume and
                  keeping a checklist of required documents can help streamline
                  the process.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>2.</span> Unclear Job Descriptions
                </h2>
                <p>
                  Job descriptions that are vague or overly broad can leave
                  candidates unsure if they are a good fit. It’s important to
                  reach out to the hiring manager for clarification and tailor
                  your application to highlight relevant skills and experiences.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>3.</span> Long Drawn-Out Interview Processes
                </h2>
                <p>
                  Extended interview processes can be exhausting and
                  demotivating. To stay motivated, keep track of your progress,
                  prepare thoroughly for each stage, and maintain open
                  communication with the recruiter.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>4.</span> Unknown Salary Ranges
                </h2>
                <p>
                  Not knowing the salary range for a position can make it
                  difficult to gauge if the job meets your financial needs.
                  Research industry standards and use platforms like Glassdoor
                  to get an idea of what to expect.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold 0 mb-2">
                  <span>5.</span> Online Resume Filters
                </h2>
                <p>
                  Many companies use Applicant Tracking Systems (ATS) to filter
                  resumes, which can be a barrier for job seekers. To increase
                  your chances, use keywords from the job posting and keep your
                  resume format simple and ATS-friendly.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>6.</span> The Hidden Job Market
                </h2>
                <p>
                  A significant number of job opportunities are never
                  advertised. Networking is key to accessing these hidden jobs.
                  Attend industry events, join professional groups, and connect
                  with people in your field.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>7.</span> Not Feeling 100% Qualified for a Job
                </h2>
                <p>
                  It’s common to feel underqualified for a job, but don’t let
                  that stop you from applying. Highlight your transferable
                  skills and show your willingness to learn and grow in the
                  role.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>8.</span> Resume Optimization
                </h2>
                <p>
                  Creating a resume that stands out is crucial. Tailor your
                  resume for each job application, use keywords, and focus on
                  achievements rather than just job duties.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>9.</span> Interview Anxiety
                </h2>
                <p>
                  Interviews can be nerve-wracking. Prepare thoroughly, practice
                  mindfulness techniques, and conduct mock interviews to build
                  confidence.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  <span>10.</span> Aligning Personal Values with Company Culture
                </h2>
                <p>
                  Finding a job that aligns with your personal values and
                  company culture is essential for long-term satisfaction.
                  Research the company, ask the right questions during the
                  interview, and trust your instincts.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold  mb-2">
                  Conclusion
                </h2>
                <p>
                  The job search journey is filled with challenges, but with the
                  right strategies and mindset, job seekers can navigate these
                  obstacles and find the perfect fit. Remember, persistence and
                  resilience are key. Keep refining your approach, and don’t be
                  afraid to seek support from mentors, career coaches, or
                  professional networks.
                </p>
              </div>
            </article>

            <footer className="mt-10 border-t dark:border-gray-700 pt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Share this post:
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://x.com/gooseittc"
                  className="text-blue-500 dark:text-blue-400"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/goose-ittc"
                  target="_blank"
                  className="text-blue-500 dark:text-blue-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/gooseittc"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-600"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/gooseittc/?igsh=YTQwZjQ0NmI0OA%3D%3D"
                  className="text-pink-500 dark:text-pink-400"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </footer>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

