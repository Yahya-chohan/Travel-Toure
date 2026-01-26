import React from 'react'
import Image from 'next/image';
import styles from "@/app/styles/Home.module.css";
import img1 from  '@/assets/Package1.webp';
import img2 from  '@/assets/Package2.webp';
import img3 from  '@/assets/Package3.webp';
import img4 from  '@/assets/Package4.webp';

export default function packages() {
const packages = [
    { img : img1 ,
        title: "Umrah Houston Package 01 (7 Nights) ",
        para : "Quad Room $2699 Triple Room $2799 Double Room $2999" ,
      },
       { img : img2 ,
        title: "Umrah Houston Package 01 (7 Nights) ",
        para : "Quad Room $2699 Triple Room $2799 Double Room $2999" ,
      },
       { img : img3 ,
        title: "Umrah Houston Package 01 (7 Nights) ",
        para : "Quad Room $2699 Triple Room $2799 Double Room $2999" ,
      },
       { img : img4 ,
        title: "Umrah Houston Package 01 (7 Nights) ",
        para : "Quad Room $2699 Triple Room $2799 Double Room $2999" ,
      },
    ]


  return (
    <>
    <div  className={styles.container}>
       <h1 className="text-blue-600 text-4xl font-semibold text-center font-serif p-10">
  Umrah Packages 2026
</h1>
<div className="grid grid-cols-3 gap-6 rounded-3x1">
  {packages.map((packag, index) => (
    <div
      key={index}
      className={`bg-white transition-shadow duration-300 hover:shadow-xl 
      ${index === 3 ? "col-span-3 flex justify-center" : ""}`}
    >
      <div className="w-[330px] ">
        <div className="bg-amber-50 rounded-3xl overflow-hidden">
          <Image
            src={packag.img}
            alt="rating"
            width={330}
            height={330}
            className="mx-auto object-cover"
          />
        </div>

        <div className="bg-white p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <h4 className="font-semibold text-blue-600 text-lg">
              {packag.title}
            </h4>
            <p className="text-gray-500 text-lg">
              {packag.para}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
    </>
  )
}
