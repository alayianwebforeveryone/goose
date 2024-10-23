import Image from "next/image";
import React from "react";

const IndividualBlog = ({title, date_time, img, }) => {
  
  return (
    <div className="w-[35%] mt-8  mb-8 px-4 py-6 bg-white shadow-md rounded-lg">
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-500">
        {date_time}
      </p>
    </header>
    <Image
      src={img}
      alt="Hero"
      className="w-full h-72 object-cover rounded-lg mb-6"
    />
    
    <button
      className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
    >
      Read more
      <span className="MuiTouchRipple-root css-w0pj6f" />
    </button>
  </div>
  );
};

export default IndividualBlog;
