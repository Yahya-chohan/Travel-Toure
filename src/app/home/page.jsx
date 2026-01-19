"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.webp"
import Image from 'next/image';
import Cardslider from "./cardslider/page";
import Cardservice from "./cardservice/page";
import Ratingcard from "./ratingcard/page";
import Packages from "./packages/page";



export default function HomePage() {

    const pathname = usePathname();
    


  return (
  
<>
  {/* Top Blue Section */}
  <div className="relative bg-blue-950 h-[60px] flex justify-center">
    
    {/* White Navbar */}
    <div className="absolute top-full translate-y-[-50%] bg-white rounded-[7px] px-10 py-6 shadow-xl flex items-center w-170 z-20">
      
      <div className="flex-shrink-0">
        <Image src={logo} alt="Logo" width={150} height={50} />
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-10 text-blue-900 text-lg">
          <li>
            <Link href="/" className={`${pathname === "/" ? "text-blue-300" : "text-blue-900"} hover:scale-110 hover:text-blue-400 transition`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${pathname === "/about" ? "text-blue-300" : "text-blue-900"} hover:scale-110 hover:text-blue-400 transition`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname === "/contact" ? "text-blue-300" : "text-blue-900"} hover:scale-110 hover:text-blue-400 transition`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </div>

  {/* Video Section */}
  <div className="relative z-10">
    <video
      className="w-full"
      autoPlay
      muted
      loop
      controls
    >
      <source src="/slidervideo.mp4" type="video/mp4" />
    </video>
  </div>

  <Cardslider />
  <Cardservice />
  <Ratingcard/>
  <Packages/>
  
</>

  );
}
