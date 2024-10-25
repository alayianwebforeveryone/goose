import Image from "next/image";
import Link from "next/link";
import React from "react";


const Careers = () => {

  
  return (
    <div>
      <div className="h-[calc(100vh-150px)] flex flex-col gap-4 justify-center items-center">
        <h1 className="2xl:text-[55px] text-center sm:text-5xl text-4xl font-bold text-blue">Careers page is under
          maintenance.</h1><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[64px] 2xl:text-[80px]  font-bold text-blue animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <Link href="/">
          <button className="py-3 px-10 bg-blue text-2xl text-white rounded-md"> Back</button>
        </Link>
      </div>








      

    </div>




  );
};

export default Careers;
