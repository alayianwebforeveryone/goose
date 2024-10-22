import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../Assets/images/logo.png";

const Footer = () => {
  return (
    <>
      {/* subscribe section */}
      <div className="bg-blue box-border">
        <div className="xl:w-[95.5%] mx-auto p-3">
          <div className="flex md:flex-row flex-col p-2 items-center">
            <div className="relative z-[1] md:p-[60px_0] py-[30px] flex md:w-[50%] subscribe-title after:left-[12%] md:after:left-[20%]">
              <h2 className="font-bold text-[#FFFFFF] md:text-[45px] sm:text-3xl text-2xl md:text-start text-center xl:leading-[55px]">
                Stay Informed, Subscribe To Our Newsletter
              </h2>
            </div>
            <div className="relative z-[1] flex md:w-[50%]">
              <div className="w-full mt-10">
                <div className="w-full bg-[#FFFFFF] flex py-2 pr-2 rounded-md shadow-md shadow-dark-blue">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Adress"
                    className="bg-transparent text-text-black border-none outline-none w-full px-6 py-2 placeholder:text-base placeholder:text-[#a3a3a3] font-light"
                  />
                  <button
                    className="z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-2 justify-center
                                                  overflow-hidden relative text-[#FFFFFF] uppercase md:w-[33%] w-[100%] py-3 md:py-4 rounded-md btn-sub"
                  >
                    SUBSCRIBE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actual footer */}

      <div className="relative z-[1] pt-[70px] bg-[#F4F4F4]">
        <div className="px-3 md:w-[calc(100%-10%)] mx-auto">
          <div className="flex justify-between flex-col md:flex-row sm:flex-wrap lg:flex-nowrap items-start gap-x-8">
            <div className="md:w-[30%]">
              <Link href="https://gooseittc.com/">
                <Image src={logo} alt="logo" className="w-[287px]" />
              </Link>
              <p className="text-base text-neutral-900 font-light mt-5 md:w-[100%]">
                If you are interested in working with Goose ITTC, please contact
                us today to get a free consultation and quote. We would love to
                hear from you and discuss how we can help you achieve your
                goals.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 mt-8 md:mt-0 md:w-[30%]">
              <div>
                <h4 className="mb-[20px] text-black text-2xl font-bold">
                  Address
                </h4>
                <div className="flex items-center gap-x-5">
                  <div className="w-[40px] h-[40px] rounded-full border border-[#ACBDF8] inline-flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-[20px] text-blue"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Location_On">
                        <g>
                          <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                          <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <Link className="w-[60%]" href="/contact">
                    <p className="text-lg font-normal text-neutral-600 hover:text-blue cursor-pointer transition duration-300 ease-in">
                      300 Nicole Ave, Mountain House, CA-95391
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-[20px] text-black text-xl font-bold">
                  Contact No
                </h4>
                <div className="flex items-center gap-x-5">
                  <div className="w-[40px] h-[40px] rounded-full border border-[#ACBDF8] inline-flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="text-[20px] text-blue font-extralight"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      ></path>
                    </svg>
                  </div>
                  <Link href="tel:+16196781977">
                    <p className="text-lg font-normal text-neutral-600 hover:text-blue cursor-pointer transition duration-300 ease-in">
                      +1-619-678-1977
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-[30%]">
              <h4 className="mb-[20px] text-black text-2xl font-bold">
                Services
              </h4>
              <ul className="flex flex-col gap-y-3">
                <li className="list-none">
                  <Link
                    className="flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer"
                    href="https://gooseittc.com/software-development"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className=" text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                    </svg>
                    <p className="text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out">
                      Software Development
                    </p>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    className="flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer"
                    href="https://gooseittc.com/technology-consulting"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className=" text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                    </svg>
                    <p className="text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out">
                      Technology Consulting
                    </p>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    className="flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer"
                    href="https://gooseittc.com/technology-training"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className=" text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                    </svg>
                    <p className="text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out">
                      Technology Training
                    </p>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    className="flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer"
                    href="https://gooseittc.com/talent-acquisitions"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className=" text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                    </svg>
                    <p className="text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out">
                      Talent Acquisitions
                    </p>
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    className="flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer"
                    href="https://gooseittc.com/implementation-partners"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className=" text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                    </svg>
                    <p className="text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out">
                      Implementation Partners
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0 md:w-[30%]">
              <h4 className="mb-[20px] text-black text-2xl font-bold">
                Working Time
              </h4>
              <div>
                <p className="text-lg text-neutral-600 mb-2">
                  Mon - Fri : 9:00 AM - 5:00 PM
                </p>
                <p className="text-lg text-neutral-600 mb-2">
                  Sat &amp; Sun Close
                </p>
              </div>
              <div className="flex gap-x-6 mt-8 ">
                <Link href="https://www.facebook.com/gooseittc" target="_blank">
                  <div className="w-[50px] h-[50px]  bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 320 512"
                      className="text-[20px] group-hover:text-[#fff] transition-all duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/goose-ittc"
                  target="_blank"
                >
                  <div className="w-[50px] h-[50px]  bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="text-[20px] group-hover:text-[#fff] transition-all duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/gooseittc?igsh=YTQwZjQ0NmI0OA=="
                  target="_blank"
                >
                  <div className="w-[50px] h-[50px] bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="text-[20px] group-hover:text-[#fff] transition-all duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="https://x.com/gooseittc" target="_blank">
                  <div className="w-[50px] h-[50px] bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-[20px] group-hover:text-[#fff] transition-all duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[70px] lg:mt-[100px] py-[30px] px-0 border-t border-[#E1E1E1] text-center">
          <div className="text-neutral-600 text-sm text-center">
            © 2023 Goose ITTC. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
