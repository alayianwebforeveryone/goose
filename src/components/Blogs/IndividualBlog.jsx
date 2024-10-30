"use client";
import Image from "next/image";
import React, { useState } from "react";
import BlogDetails from "./BlogDetails";
const IndividualBlog = ({ title, date_time, img }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BlogDetails isVisible={showModal} close={() => setShowModal(false)} />
      <div className="sm:w-[100%] h-[90%] w-[100%] mt-8 mx-auto mb-8 px-4 py-6  shadow-md rounded-lg">
        <header className="mb-6">
        <h1 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-sm text-gray-500">{date_time}</p>
        </header>
        <Image
          src={img}
          alt="Hero"
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Read more
          <span className="MuiTouchRipple-root css-w0pj6f" />
        </button>
      </div>
      
    </>
  );
};

export default IndividualBlog;
