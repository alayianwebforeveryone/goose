"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../Assets/images/logo.png";
import menu from "../../../Assets/Icons/menu.svg";
import close from "../../../Assets/Icons/close.svg";
import TopBanner from "./topbanner";

const Navbar = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [switchMenu, setSwitchMenu] = useState(menu);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    setSwitchMenu((prev) => (prev === menu ? close : menu));
  };

  return (
    <>
      <TopBanner />

      <nav className="w-full bg-white ">
        <div className="flex  md:flex-col lg:flex-row  w-full  justify-between  items-center    gap-4  px-2  lg:justify-evenly bg-white        py-4 lg:px-8">
          {/* Logo Section */}
          <div className="md:w-[250px]  w-[200px]">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="cursor-pointer sm:hidden" onClick={toggleMenu}>
            <Image
              src={switchMenu}
              alt="menu"
              className="cursor-pointer"
              width={30}
              height={30}
            />
          </div>

          {/* Desktop Menu */}

          <div
            className="hidden w-full   md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex  md:w-full   items-center flex-col font-medium  md:p-0 mt-4 border border-gray-100 rounded-lg    md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className=" ">
                <Link
                  href="/"
                  className=" text-lg   font-extrabold    px-2 "
                >
                  HOME
                </Link>
              </li>
              <li className="  ">
                <Link href="/about" className=" text-lg  px-2  font-extrabold  ">
                  ABOUT US
                </Link>
              </li>
              <li
                className="relative    dropdown-container"
                onMouseOver={() => setIsServiceDropdownOpen((prev) => !prev)}
                onMouseLeave={() => setIsServiceDropdownOpen((prev) => !prev)}
              >
                {/* dropdowntriger */}
                <button className="flex   text-md  font-extrabold items-center justify-between w-full px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">
                  SERVICES
                  <span className="text-blue  ml-2      text-xl  font-extrabold ">
                    {isServiceDropdownOpen ? "-" : "+"}
                  </span>
                </button>

                {/* Dropdown menu */}
                <ul className="dropdown-menu w-60 absolute left-0 z-50  bg-white  shadow-lg rounded hidden">
                  <li className=" font-bold py-6 px-4 text-md mt-4 border-b-2 ">
                    <Link href="/services/softDev" className=" py-4  ">
                      Software Development
                    </Link>
                  </li>
                  <li className="font-bold py-6 px-4 border-b-2">
                    <Link
                      href="/services/techConsulting"
                      className="py-2   text-md font-extrabold   "
                    >
                      Technology Consulting
                    </Link>
                  </li>
                  <li className="font-bold py-6 px-4 border-b-2">
                    <Link
                      href="/services/techTraining"
                      className=" py-2 text-md  font-extrabold   "
                    >
                      Technology Training
                    </Link>
                  </li>
                  <li className="font-bold py-6 px-4 border-b-2">
                    <Link
                      href="/services/talentAcquisitions"
                      className=" py-6  text-md font-extrabold   "
                    >
                      Talent Acquisition
                    </Link>
                  </li>
                  <li className="font-bold py-6 px-4 border-b-2">
                    <Link
                      href="/services/impPattern"
                      className=" py-6  text-md  font-extrabold  "
                    >
                      Implementation Partners
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="text-md font-extrabold  px-2">
                  CONTACT US
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="text-md font-extrabold   px-2">
                  BLOGS
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-md font-extrabold   px-2  "
                >
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>

          {/* quote btn */}
          <Link href="/contact" className="hidden xl:block ">
            <div className=" justify-between items-center xl:ml-[45px] px-4 py-4 text-white font-bold text-xl  lg:flex  hidden bg-blue rounded-lg">
              <button className=" ">Requset quote</button>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </div>
          </Link>
          

         
        </div>

        {/* Mobile Menu */}
        <nav className="w-full bg-white ">
          {/* Mobile Menu */}
          {showMenu && (
            <div className="lg:hidden flex flex-col space-y-4 px-2">
              {/* Home Link */}
              <Link
                href="/"
                className=" text-md font-extrabold border-b-2   px-2"
              >
                Home
              </Link>

              {/* About Us Link */}
              <Link
                href="/about"
                className=" text-md border-b-2 font-extrabold   px-2"
              >
                About us
              </Link>

              <div>
                {/* dropdown triger */}
                <button
                  className="flex items-center border-b-2 justify-between w-full "
                  onClick={() =>
                    setIsServiceDropdownOpen(!isServiceDropdownOpen)
                  }
                >
                  <span className="text-md font-extrabold    px-2">
                    Services
                  </span>
                  <span className="bg-blue mb-2   px-3 text-3xl  text-white font-extrabold ">
                    {isServiceDropdownOpen ? "-" : "+"}
                  </span>
                </button>
                {/* dropdown */}
                {isServiceDropdownOpen && (
                  <div className="flex flex-col space-y-1 pl-4">
                    <Link
                      href="/services/softDev"
                      className=" py-4   border-b-2  text-md font-extrabold   "
                    >
                      Software Development
                    </Link>
                    <Link
                      href="/services/techConsulting"
                      className="py-2 border-b-2  text-md font-extrabold   "
                    >
                      Technology Consulting
                    </Link>
                    <Link
                      href="/services/techTraining"
                      className=" py-2 text-md border-b-2 font-extrabold   "
                    >
                      Technology Training
                    </Link>
                    <Link
                      href="/services/talentAcquisitions"
                      className=" py-2 border-b-2 text-md font-extrabold   "
                    >
                      Technology Acquisition
                    </Link>
                    <Link
                      href="/services/impPattern"
                      className=" py-2 text-md border-b-2 font-extrabold  "
                    >
                      Implementation Partners
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us Link */}
              <Link
                href="/contact"
                className="text-md font-extrabold border-b-2  px-2"
              >
                Contact
              </Link>

              {/* Blogs Link */}
              <Link
                href="/blogs"
                className="text-md font-extrabold border-b-2   px-2"
              >
                Blogs
              </Link>

              {/* Careers Link */}
              <Link
                href="/careers"
                className="text-md font-extrabold   px-2 border-b-2 "
              >
                Careers
              </Link>
            </div>
          )}
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
