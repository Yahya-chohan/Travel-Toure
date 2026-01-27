import React from "react";
import Imgsec from "./imgsec/page";

export default function Section() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full items-stretch overflow-hidden">

        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 bg-blue-900 text-white flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
          Embark on a divine journey with our exclusive Umrah packages.
Experience tranquility like never before.
          </p>
        </div>

        {/* Right Image / Video Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-6">
          <Imgsec />
        </div>

      </div>
    </>
  );
}