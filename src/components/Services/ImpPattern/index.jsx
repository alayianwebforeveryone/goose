import Link from "next/link";
import React from "react";

const ImpPattern = () => {
  return (
    <div>
      <div class="overflow-hidden">
        <div class="h-screen w-screen flex-col flex justify-center items-center">
          <h2 class="md:text-5xl text-3xl caption-top text-center font-semibold mb-5">
            Page is under maintenance
          </h2>
          <Link href="/">
            <button class="py-3 px-10 bg-blue text-2xl text-white rounded-md">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ImpPattern;
