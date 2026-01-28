"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/logo.webp";
import Cardslider from "./cardslider/page";
import Cardservice from "./cardservice/page";
import Ratingcard from "./ratingcard/page";
import Packages from "./packages/page";
import Logoslider from "./logoslider/page";
import Imgsec from "./video/page";

export default function HomePage() {
  const pathname = usePathname();

  return (
    <>
    <div className="relative z-10 ">
        <video
          className="w-full h-[350px] md:h-[550px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/slidervideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ================= PAGE SECTIONS ================= */}
      <div className="px-4 md:px-10">
        <Cardslider />
        <Cardservice />
        <Ratingcard />
        <Packages />
        <Logoslider />
        <Imgsec />
      </div>
    </>
  );
}
