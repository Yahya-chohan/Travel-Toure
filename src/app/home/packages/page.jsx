import React from "react";
import Image from "next/image";
import styles from "@/app/styles/Home.module.css";
import img1 from "@/assets/Package1.webp";
import img2 from "@/assets/Package2.webp";
import img3 from "@/assets/Package3.webp";
import img4 from "@/assets/Package4.webp";

export default function Packages() {
  const packages = [
    {
      img: img1,
      title: "Umrah Houston Package 01 (7 Nights)",
      para: "Quad Room $2699 Triple Room $2799 Double Room $2999",
    },
    {
      img: img2,
      title: "Umrah Houston Package 01 (7 Nights)",
      para: "Quad Room $2699 Triple Room $2799 Double Room $2999",
    },
    {
      img: img3,
      title: "Umrah Houston Package 01 (7 Nights)",
      para: "Quad Room $2699 Triple Room $2799 Double Room $2999",
    },
    {
      img: img4,
      title: "Umrah Houston Package 01 (7 Nights)",
      para: "Quad Room $2699 Triple Room $2799 Double Room $2999",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className="text-blue-600 text-3xl md:text-4xl font-semibold text-center font-serif py-8">
        Umrah Packages 2026
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((packag, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index === 3 ? "lg:col-span-3" : ""
            }`}
          >
            <div className="w-full max-w-[330px] bg-white rounded-3xl transition-shadow duration-300 hover:shadow-xl">
              <div className="bg-amber-50 rounded-3xl overflow-hidden">
                <Image
                  src={packag.img}
                  alt="Umrah Package"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h4 className="font-semibold text-blue-600 text-lg mb-2">
                  {packag.title}
                </h4>
                <p className="text-gray-500 text-sm">
                  {packag.para}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
