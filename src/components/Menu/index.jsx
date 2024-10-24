"use client";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../Assets/images/logo.png";
import menu from "../../../Assets/Icons/menu.svg";
import TopBanner from "./topbanner";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  return (
    <>
      <TopBanner />

      <nav className="w-full bg-white ">
        <div className="flex  w-full   items-center justify-between lg:justify-evenly px-2     py-4 lg:px-8">
          {/* Logo Section */}
          <div className="md:w-[250px] w-[200px]">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-full" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <Menubar className="hidden bg-white border-0  shadow-0  lg:flex items-center space-x-4">
            {/* Desktop Menu Items */}
            <MenubarMenu>
              <Link href="/">
                <MenubarTrigger className = "font-bold text-lg ">HOME</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu> 
              <Link href="/About">
                <MenubarTrigger className = "font-bold text-lg ">ABOUT US</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className = "font-bold text-lg ">SERVICE</MenubarTrigger>
              <MenubarContent>
                <Link className="font-extrabold" href="/SoftDev">
                  <MenubarItem>Software Development</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/TechConsulting">
                  <MenubarItem>Technology Consulting</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/TechTraining">
                  <MenubarItem>Technology Training</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/TechAcquisition">
                  <MenubarItem>Technology Acquisition</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/ImpPartners">
                  <MenubarItem>Implementation Partners</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <Link href="/Contact" >
                <MenubarTrigger className = "font-bold text-lg ">CONTACT US</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link href="/Blogs">
                <MenubarTrigger className = "font-bold text-lg ">BLOGS</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link href="/Careers">
                <MenubarTrigger className = "font-bold text-lg ">CAREERS</MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
          {/* quote btn */}
          <div className=" justify-between items-center xl:ml-[45px] px-4 py-4 text-white font-bold text-xl  lg:flex  hidden bg-blue rounded-lg">
            <button class=" ">
              Requset quote
            </button>
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image src={menu} alt="menu" className="h-12 w-12" />
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className="w-full bg-white ">
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden flex flex-col space-y-4 px-4">
              {/* Home Link */}
              <Link href="/" className="py-2">
                HOME
              </Link>

              {/* About Us Link */}
              <Link href="/About" className="py-2">
                ABOUT US
              </Link>

              {/* Service Dropdown */}
              <div>
                <button
                  className="flex justify-between w-full py-2"
                  onClick={() =>
                    setIsServiceDropdownOpen(!isServiceDropdownOpen)
                  }
                >
                  <span>SERVICE</span>
                  <span className="bg-blue  px-3 text-lg text-white font-bold ">
                    {isServiceDropdownOpen ? "-" : "+"}
                  </span>
                </button>
                {isServiceDropdownOpen && (
                  <div className="flex flex-col space-y-1 pl-4">
                    <Link href="/SoftDev" className="py-1">
                      Software Development
                    </Link>
                    <Link href="/TechConsulting" className="py-1">
                      Technology Consulting
                    </Link>
                    <Link href="/TechTraining" className="py-1">
                      Technology Training
                    </Link>
                    <Link href="/TechAcquisition" className="py-1">
                      Technology Acquisition
                    </Link>
                    <Link href="/ImpPartners" className="py-1">
                      Implementation Partners
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us Link */}
              <Link href="/Contact" className="py-2">
                CONTACT US
              </Link>

              {/* Blogs Link */}
              <Link href="/Blogs" className="py-2">
                BLOGS
              </Link>

              {/* Careers Link */}
              <Link href="/Careers" className="py-2">
                CAREERS
              </Link>
            </div>
          )}
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
