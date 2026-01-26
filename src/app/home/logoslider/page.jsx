import React from 'react'
import styles from "@/app/styles/Home.module.css";
import Image from 'next/image'
import imag1 from "@/assets/01.png"
import imag2 from "@/assets/02.png"
import imag3 from "@/assets/03.png"
import imag4 from "@/assets/04.png"
import logo1 from "@/assets/1.png"
import logo2 from "@/assets/2.png"
import logo3 from "@/assets/3.png"
import logo4 from "@/assets/4.png"
import logo5 from "@/assets/5.png"
import logo6 from "@/assets/6.png"
import logo7 from "@/assets/7.png"
import logo8 from "@/assets/8.png"
import logo9 from "@/assets/9.png"
import logo10 from "@/assets/10.png"
import logo11 from "@/assets/11.png"
import logo12 from "@/assets/12.png"
import logo13 from "@/assets/13.png"
import logo14 from "@/assets/16.png"
import logo15 from "@/assets/17.png"
import logo16 from "@/assets/04.png"
import logo17 from "@/assets/04.png"


export default function Page() {

  const logoslider = [
    {
      imag: imag1,
      h1: "0 +",
      p: "Years Of Experience",
    },
    {
      imag: imag2,
      h1: "0 +",
      p: "Happy Customers",
    },
    {
      imag: imag3,
      h1: "0 +",
      p: "Professional Guide",
    },
    {
      imag: imag4,
      h1: "0 +",
      p: "Top Destinations",
    },
  ]
  const logo =[
    {
        img: logo1,
    },
 {
        img: logo2,
    },
 {
        img: logo3,
    },
 {
        img: logo4,
    },
 {
        img: logo5,
    },
 {
        img: logo6,
    },
 {
        img: logo7,
    },
 {
        img: logo8,
    },
 {
        img: logo9,
    },
 {
        img: logo10,
    },
     {
        img: logo11,
    },
     {
        img: logo12,
    },
     {
        img: logo13,
    },
     {
        img: logo14,
    },
    {
        img: logo15,
    },
]


  return (
    <>
    <div className='bg-blue-100 w-full py-12 '>
      <div className='bg-blue-100 p-6 mx-auto max-w-3xl text-center '>
        <h4 className="text-xl font-bold">Why Us</h4>
        <p>
          Why accept a generic journey when you can have a truly personalized travel experience? At our core, we believe in tailoring every aspect of your trip to suit your preferences. As avid travelers ourselves, we understand the thrill of embarking on a meticulously crafted adventure. Whether your dream is to savor the flavors of Italy, conquer the peaks of Patagonia, or commemorate a special milestone with your loved ones, our dedicated travel concierge team stands prepared to curate an unforgettable and bespoke experience just for you.
        </p>
      </div>
      </div>
<div className="flex items-center justify-center ">
    <div className="flex gap-6 mt-6 flex-nowrap max-w-3xl justify-center items-center">
  {logoslider.map((logo, index) => (
    <div key={index} className="w-[330px]">
      <div className="bg-amber-50 rounded-3xl overflow-hidden">
        <Image
          src={logo.imag}
          alt="logo"
          width={50}
          height={50}
          className="mx-auto object-cover"
        />
      </div>
      <p className="text-xl font-bold mt-3 text-center">{logo.h1}</p>
      <p className="text-center">{logo.p}</p>
    </div>
  ))}
</div>
</div>

<div className="overflow-hidden w-[750px] mx-auto mt-4">
  <div className="flex gap-4 marquee">
    {[...logo, ...logo].map((logoItem, index) => (
      <Image
        key={index}
        src={logoItem.img}
        alt={`logo-${index}`}
        width={50}
        height={50}
        className="object-cover"
      />
    ))}
  </div>
</div>


    </>
  )
}
