import React from "react";
import TopBanner from "./topbanner";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../Assets/images/logo.png";

const Menu = () => {
  return (
    <>
      <div className="overflow-hidden">
        <TopBanner />

        {/* navigation bar------------------------------------ */}

        <div
          className="z-[1000] relative transition-all duration-300 headroom-wrapper"
          style={{ height: 110 }}
        >
          <div
            className="headroom headroom--unfixed"
            style={{
              position: "relative",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <div className="sm:px-[30px] bg-[#FFFFFF] relative py-2 md:py-0">
              <div className="max-w-[1520px] mx-auto px-3">
                <div className="flex justify-between items-center gap-x-5">
                  <div className="md:w-[250px] w-[200px]">
                    <Link href="/">
                      <Image src={logo} alt="logo" className="w-full" />
                    </Link>
                  </div>
                  <div className="md:block hidden">
                    <ul className="flex items-center">
                      <li>
                        <Link
                          className="text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[20px] 
                      leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                      duration-200 ease-in cursor-pointer text-nowrap"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>  
                        <Link
                          className="text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[20px] 
                      leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                      duration-200 ease-in cursor-pointer text-nowrap"
                          href="/About"
                        >
                          About Us
                        </Link>
                      </li>
                      <li
                        className="text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[32px] 
                                              leading-[24px] uppercase hover:text-[#0a58ca] transition-all 
                                              duration-200 ease-in cursor-pointer text-nowrap inline-block relative service-menu"
                      >
                        <Link
                          className="service-link"
                          href="/Services"
                        >
                          Service
                        </Link>
                        <ul className="sub-menu">
                          <li
                            className="block list-none border-[#E9E9E8] border border-solid relative after:absolute after:bg-blue after:w-[2px] after:transition-all after:duration-500 after:ease-out after:h-0
                  after:left-0 after:top-[50%] hover:after:h-[100%] after:translate-y-[-50%] py-[12px] 2xl:py-[42px] group"
                          >
                            <a
                              className="text-black py-[12px] px-[20px] 2xl:py-[42px] 2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-base hover:text-blue group-hover:pl-[26px]"
                              href="Software development_files/Software development.html"
                            >
                              Software Development
                            </a>
                          </li>
                          <li
                            className="block list-none border-[#E9E9E8] border border-solid relative after:absolute after:bg-blue after:w-[2px] after:transition-all after:duration-500 after:ease-out after:h-0
                  after:left-0 after:top-[50%] hover:after:h-[100%] after:translate-y-[-50%] py-[12px] 2xl:py-[42px] group"
                          >
                            <Link
                              className="text-black py-[12px] px-[20px] 2xl:py-[42px] 2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-base hover:text-blue group-hover:pl-[26px]"
                              href="#"
                            >
                              Technology Consulting
                            </Link>
                          </li>
                          <li
                            className="block list-none border-[#E9E9E8] border border-solid relative after:absolute after:bg-blue after:w-[2px] after:transition-all after:duration-500 after:ease-out after:h-0
                  after:left-0 after:top-[50%] hover:after:h-[100%] after:translate-y-[-50%] py-[12px] 2xl:py-[42px] group"
                          >
                            <Link
                              className="text-black py-[12px] px-[20px] 2xl:py-[42px] 2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-base hover:text-blue group-hover:pl-[26px]"
                              href="#"
                            >
                              Technology Training
                            </Link>
                          </li>
                          <li
                            className="block list-none border-[#E9E9E8] border border-solid relative after:absolute after:bg-blue after:w-[2px] after:transition-all after:duration-500 after:ease-out after:h-0
                  after:left-0 after:top-[50%] hover:after:h-[100%] after:translate-y-[-50%] py-[12px] 2xl:py-[42px] group"
                          >
                            <Link
                              className="text-black py-[12px] px-[20px] 2xl:py-[42px] 2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-base hover:text-blue group-hover:pl-[26px]"
                              href="#"
                            >
                              Talent Acquisitions
                            </Link>
                          </li>
                          <li
                            className="block list-none border-[#E9E9E8] border border-solid relative after:absolute after:bg-blue after:w-[2px] after:transition-all after:duration-500 after:ease-out after:h-0
                  after:left-0 after:top-[50%] hover:after:h-[100%] after:translate-y-[-50%] py-[12px] 2xl:py-[42px] group"
                          >
                            <Link
                              className="text-black py-[12px] px-[20px] 2xl:py-[42px] 2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-base hover:text-blue group-hover:pl-[26px]"
                              href="#"
                            >
                              Implementation Partners
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          className="text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[20px] 
                      leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                      duration-200 ease-in cursor-pointer text-nowrap"
                          href="/Contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[20px] 
                      leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                      duration-200 ease-in cursor-pointer text-nowrap"
                          href="/Blogs"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[20px] 
                      leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                      duration-200 ease-in cursor-pointer text-nowrap"
                          href="/Careers"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="xl:ml-[45px] lg:block hidden undefined">
                      <Link
                        className="btn-one"
                        href="#"
                      >
                        Request quote
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                          <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                        </svg>
                      </Link>
                    </button>
                  </div>
                  <div className="md:hidden block">
                    <div className="sm:mr-[42px]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-[34px] text-black"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu ">
                <ul className="flex items-center list-none">
                  <li className="text-start w-full px-5 py-4 border-[#E9E9E8] border-b list-none">
                    <Link
                      className="text-sm font-semibold text-black"
                      href="https://gooseittc.com/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-start w-full px-5 py-4 border-[#E9E9E8] border-b list-none">
                    <Link
                      className="text-sm font-semibold text-black"
                      href="https://gooseittc.com/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li
                    className="w-[100%] float-left relative border-[#E9E9E8] border-b"
                    style={{ padding: "12px 0px" }}
                  >
                    <span className="text-sm font-semibold text-black px-5 py-3">
                      Service
                    </span>
                    <ul className="mt-2 mb-0" style={{ display: "none" }}>
                      <li className="block list-none border-[#E9E9E8] border border-solid relative py-3">
                        <Link
                          className="text-black px-[20px]  2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-sm hover:text-blue group-hover:pl-[26px]"
                          href="https://gooseittc.com/software-development"
                        >
                          Software Development
                        </Link>
                      </li>
                      <li className="block list-none border-[#E9E9E8] border border-solid relative py-3">
                        <Link
                          className="text-black px-[20px]  2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-sm hover:text-blue group-hover:pl-[26px]"
                          href="https://gooseittc.com/technology-consulting"
                        >
                          Technology Consulting
                        </Link>
                      </li>
                      <li className="block list-none border-[#E9E9E8] border border-solid relative py-3">
                        <Link
                          className="text-black px-[20px]  2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-sm hover:text-blue group-hover:pl-[26px]"
                          href="https://gooseittc.com/technology-training"
                        >
                          Technology Training
                        </Link>
                      </li>
                      <li className="block list-none border-[#E9E9E8] border border-solid relative py-3">
                        <Link
                          className="text-black px-[20px]  2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-sm hover:text-blue group-hover:pl-[26px]"
                          href="https://gooseittc.com/talent-acquisitions"
                        >
                          Talent Acquisitions
                        </Link>
                      </li>
                      <li className="block list-none border-[#E9E9E8] border border-solid relative py-3">
                        <Link
                          className="text-black px-[20px]  2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-sm hover:text-blue group-hover:pl-[26px]"
                          href="https://gooseittc.com/implementation-partners"
                        >
                          Implementation Partners
                        </Link>
                      </li>
                    </ul>
                    <span
                      className="w-[40px] bg-blue inline-flex justify-center items-center text-center z-[100] text-3xl text-[#FFFFFF] absolute right-0 top-0"
                      style={{ height: "100%" }}
                    >
                      +
                    </span>
                  </li>
                  <li className="text-start w-full px-5 py-4 border-[#E9E9E8] border-b list-none">
                    <Link
                      className="text-sm font-semibold text-black"
                      href="/Contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="text-start w-full px-5 py-4 border-[#E9E9E8] border-b list-none">
                    <Link
                      className="text-sm font-semibold text-black"
                      href="/Blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="text-start w-full px-5 py-4 border-[#E9E9E8] border-b list-none">
                    <Link
                      className="text-sm font-semibold text-black"
                      href="/Careers"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
