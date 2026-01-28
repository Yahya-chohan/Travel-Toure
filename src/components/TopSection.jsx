"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/logo.webp";





export default function HomePage() {
  const pathname = usePathname();

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="relative bg-blue-950 h-[60px] flex justify-center">
        <div className="absolute top-full -translate-y-1/2 bg-white rounded-lg px-4 md:px-10 py-4 md:py-6 shadow-xl flex flex-col md:flex-row items-center w-[95%] md:w-[85%] z-20">

          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt="Logo" width={130} height={40} />
          </div>

          {/* Menu */}
          <div className="flex-1 flex justify-center">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-blue-900 text-base md:text-lg text-center">
              <li>
                <Link
                  href="/"
                  className={`${pathname === "/" ? "text-blue-400" : ""} hover:text-blue-400 transition`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${pathname === "/about" ? "text-blue-400" : ""} hover:text-blue-400 transition`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${pathname === "/contact" ? "text-blue-400" : ""} hover:text-blue-400 transition`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

     
      </>
        );
}