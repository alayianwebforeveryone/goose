import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from '../../../../Assets/images/Software_Development.jpg';


const SoftDev = () => {
  return(
   <div>
     <div>
      {/* Hero Section  */}
    
        <div className="software-hero-bg bg-cover overflow-hidden">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center">
          <div className='lg:text-left text-center '>
          <h1 className="md:text-[42px] xl:text-[50px] md:leading-[3.5rem] sm:text-4xl text-3xl  leading-[1.4] font-bold text-[#000000] mb-[20px]">
                Software Development</h1>
                <p className="text-[#000000] font-medium lg:max-w-[63.956%] lg:w-[62%] md:w-[55.9%] sm:w-[70%] w-[90%] md:mx-auto lg:mx-0 sm:text-base text-sm md:leading-[30px] leading-[25px] mb-[20px]">
                We specialize in delivering comprehensive software solutions tailored to meet your business needs. Our
                expertise spans across various domains, ensuring that you have the right tools to drive efficiency and
                growth.</p><Link href="/contact"><button className="btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-4 md:py-5 rounded-full">Contact us<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="ml-2 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                  </svg></button></Link>
            </div>
          </div>
        </div>
        {/* Content Section  */}
        <div className="relative bg-bg-color w-full py-[50px]">
          <div className="md:max-w-[760px] mx-auto  xl:max-w-[1160px] w-full px-4">
            <h2 className="p-[10px] text-center w-full md:text-[34px] text-[22px] font-bold"> Our Comprehensive Range Of
              IT Services Covers All Your Needs! </h2>
          </div>
        </div>
        {/* It Services Offers section  */}
        <div className="relative bg-bg-color w-full pb-10">
        <div className="md:max-w-[760px] mx-auto  xl:max-w-[1160px] w-full px-4">
          <div className="text-left lg:w-[55%] w-full lg:max-w-[63%] md:max-w-[75%] mb-[20px] p-[10px]">
            <h4 className="lg:text-2xl text-xl leading-[30px] font-bold 2xl:text-[26px] 2xl:leading-[36px] ">We Are
              Offering Wide Range Of IT Services Desktop Application To Mobile Application.</h4>
          </div>
          <div className="w-full flex md:flex-row flex-col-reverse justify-between gap-x-10">
            <div className="md:w-[50%] w-full sm:items-center">
              <div className="mb-[20px]">
                <div className="p-[10px] border-solid border-blue border-2 rounded-[20px_0px_20px_0px] transition-all durstion-[0.4s]
                            hover:rounded-[0px_20px_0px_20px]">
                  <div className="flex text-start flex-row items-center">
                    <div className="bg-blue hover:bg-[#000] text-xl p-[.5em] mr-[15px] rounded-tl-[10px] rounded-br-[10px] transition">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="text-[#FFFFFF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                        </path>
                      </svg></div>
                    <div className="flex-grow">
                      <p className="text-[#000000] text-lg font-semibold">Custom ERP Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[20px]">
                <div className="p-[10px] border-solid border-blue border-2 rounded-[20px_0px_20px_0px] transition-all durstion-[0.4s]
                            hover:rounded-[0px_20px_0px_20px]">
                  <div className="flex text-start flex-row items-center">
                    <div className="bg-blue hover:bg-[#000] text-xl p-[.5em] mr-[15px] rounded-tl-[10px] rounded-br-[10px] transition">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="text-[#FFFFFF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                        </path>
                      </svg></div>
                    <div className="flex-grow">
                      <p className="text-[#000000] text-lg font-semibold">Planning Solutions And Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[20px]">
                <div className="p-[10px] border-solid border-blue border-2 rounded-[20px_0px_20px_0px] transition-all durstion-[0.4s]
                            hover:rounded-[0px_20px_0px_20px]">
                  <div className="flex text-start flex-row items-center">
                    <div className="bg-blue hover:bg-[#000] text-xl p-[.5em] mr-[15px] rounded-tl-[10px] rounded-br-[10px] transition">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="text-[#FFFFFF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                        </path>
                      </svg></div>
                    <div className="flex-grow">
                      <p className="text-[#000000] text-lg font-semibold">Collaboration Tools</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[20px]">
                <div className="p-[10px] border-solid border-blue border-2 rounded-[20px_0px_20px_0px] transition-all durstion-[0.4s]
                            hover:rounded-[0px_20px_0px_20px]">
                  <div className="flex text-start flex-row items-center">
                    <div className="bg-blue hover:bg-[#000] text-xl p-[.5em] mr-[15px] rounded-tl-[10px] rounded-br-[10px] transition">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="text-[#FFFFFF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                        </path>
                      </svg></div>
                    <div className="flex-grow">
                      <p className="text-[#000000] text-lg font-semibold">SaaS Based Applications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[20px]">
                <div className="p-[10px] border-solid border-blue border-2 rounded-[20px_0px_20px_0px] transition-all durstion-[0.4s]
                            hover:rounded-[0px_20px_0px_20px]">
                  <div className="flex text-start flex-row items-center">
                    <div className="bg-blue hover:bg-[#000] text-xl p-[.5em] mr-[15px] rounded-tl-[10px] rounded-br-[10px] transition">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" className="text-[#FFFFFF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
                        </path>
                      </svg></div>
                    <div className="flex-grow">
                      <p className="text-[#000000] text-lg font-semibold">Supply Chain Applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div  className="md:w-[50%] mb-10  w-full text-center   "><Image src={img} alt="training-img"   className='ImgBorder w-full h-full rounded-ss-2xl rounded-ee-2xl' /></div>
          </div>
        </div>
      </div>
      </div>
   </div>
  )
}

export default SoftDev