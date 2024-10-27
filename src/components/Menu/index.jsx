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
                <Link className="font-extrabold mb-2 py-2 " href="/Services/SoftDev">
                  <MenubarItem className = "py-6 text-lg font-extrabold mb-2  px-4 ">Software Development</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link className="font-extrabold mb-2 py-2" href="/Services/TechConsulting " >
                  <MenubarItem className = "py-6 text-lg font-extrabold mb-2  px-4 ">Technology Consulting</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link  href="/Services/TechTraining">
                  <MenubarItem className = "py-6 text-lg font-extrabold mb-2  px-4 ">Technology Training</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link className="py-2 " href="/Services/TalentAcquisitions">
                  <MenubarItem className = "py-6 text-lg font-extrabold mb-2  px-4 ">Technology Acquisition</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/Services/ImpPattern ">
                  <MenubarItem className = "py-6 text-lg font-extrabold mb-2  px-4 ">Implementation Partners</MenubarItem>
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
            <button className=" ">
              Requset quote 
            </button>
            <svg
                  stroke="currentColor"
                  fill="currentColor"
                  // stroke-width="0"
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
            <div className="lg:hidden flex flex-col space-y-4 px-2">
              {/* Home Link */}
              <Link href="/" className=" text-md font-extrabold border-b-2   px-2">
                Home
              </Link>

              {/* About Us Link */}
              <Link href="/About" className=" text-md border-b-2 font-extrabold   px-2">
                About us
              </Link>

              {/* Service Dropdown */}
              <div>
                <button
                  className="flex items-center border-b-2 justify-between w-full "
                  onClick={() =>
                    setIsServiceDropdownOpen(!isServiceDropdownOpen)
                  }
                >
                  <span className="text-md font-extrabold    px-2">Services</span>
                  <span className="bg-blue mb-2   px-3 text-lg text-white font-bold ">
                    {isServiceDropdownOpen ? "-" : "+"}
                  </span>
                </button>
                {isServiceDropdownOpen && (
                  <div className="flex flex-col space-y-1 pl-4">
                    <Link  href="/Services/SoftDev" className= " py-2 border-b-2 text-md font-extrabold   ">
                      Software Development
                    </Link>
                    <Link href="/Services/TechConsulting" className= "py-2 border-b-2  text-md font-extrabold   ">
                      Technology Consulting
                    </Link>
                    <Link href="/Services/TechTraining" className= " py-2 text-md border-b-2 font-extrabold   ">
                      Technology Training
                    </Link>
                    <Link href="/Services/TalentAcquisitions" className= " py-2 border-b-2 text-md font-extrabold   ">
                      Technology Acquisition
                    </Link>
                    <Link href="/Services/ImpPartners" className= " py-2 text-md border-b-2 font-extrabold  ">
                      Implementation Partners
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us Link */}
              <Link href="/Contact" className= "text-md font-extrabold border-b-2  px-2">
                Contact
              </Link>

              {/* Blogs Link */}
              <Link href="/Blogs" className= "text-md font-extrabold border-b-2   px-2">
                Blogs
              </Link>

              {/* Careers Link */}
              <Link href="/Careers" className= "text-md font-extrabold   px-2 border-b-2 ">
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




