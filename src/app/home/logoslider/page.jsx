import React from "react";
import Image from "next/image";

import imag1 from "@/assets/01.png";
import imag2 from "@/assets/02.png";
import imag3 from "@/assets/03.png";
import imag4 from "@/assets/04.png";

import logo1 from "@/assets/1.png";
import logo2 from "@/assets/2.png";
import logo3 from "@/assets/3.png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/5.png";
import logo6 from "@/assets/6.png";
import logo7 from "@/assets/7.png";
import logo8 from "@/assets/8.png";
import logo9 from "@/assets/9.png";
import logo10 from "@/assets/10.png";
import logo11 from "@/assets/11.png";
import logo12 from "@/assets/12.png";
import logo13 from "@/assets/13.png";
import logo14 from "@/assets/16.png";
import logo15 from "@/assets/17.png";

export default function Page() {
  const logoslider = [
    { imag: imag1, h1: "0 +", p: "Years Of Experience" },
    { imag: imag2, h1: "0 +", p: "Happy Customers" },
    { imag: imag3, h1: "0 +", p: "Professional Guide" },
    { imag: imag4, h1: "0 +", p: "Top Destinations" },
  ];

  const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15,
  ];

  return (
    <>
      {/* WHY US SECTION */}
      <div className="bg-blue-100 w-full py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-bold mb-3">Why Us</h4>
          <p className="text-sm sm:text-base">
            Why accept a generic journey when you can have a truly personalized
            travel experience? Our travel concierge team curates unforgettable,
            tailor-made adventures just for you.
          </p>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="flex justify-center px-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-6 max-w-5xl mt-8">
          {logoslider.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 text-center"
            >
              <div className="bg-amber-50 rounded-3xl p-5">
                <Image
                  src={item.imag}
                  alt="icon"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <p className="text-xl font-bold mt-3">{item.h1}</p>
              <p className="text-sm">{item.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="overflow-hidden w-full max-w-4xl mx-auto mt-10 px-4">
        <div className="flex gap-8 marquee">
          {[...logos, ...logos].map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`logo-${index}`}
              width={40}
              height={40}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
}
