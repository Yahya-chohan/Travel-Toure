import React from 'react';
import Image from "next/image";
import styles from "@/app/styles/Card.module.css";
import img1 from '@/assets/rating1.jpg';
import img2 from '@/assets/rating2.jpg';
import img3 from '@/assets/rating3.jpg';
import img4 from '@/assets/rating4.jpg';
import img5 from '@/assets/rating5.jpg';
import img6 from '@/assets/rating6.jpg';
import img7 from '@/assets/rating7.jpg';
import img8 from '@/assets/rating8.jpg';
import img9 from '@/assets/rating9.jpg';

export default function rating() {
const ratingimg =[
  { img : img1 ,
    title: "Rating ",
    icon : "q" ,
  },
    { img : img2 ,
    title: "Rating ",
    icon : "q",
  },
    { img : img3,
    title: "Rating ",
    icon : "q" ,
  },
    { img : img4,
    title: "Rating ",
    icon : "q",
  },
    { img : img5,
    title: "Rating ",
    icon : "q",
  },
    { img : img6,
    title: "Rating ",
    icon : "q",
  },
    { img : img7,
    title: "Rating ",
    icon : "q" ,
  },
    { img : img8,
    title: "Rating ",
    icon :"q" ,
  },
    { img : img9,
    title: "Rating ",
    icon : "q",
  },
]



  return (
    <>
<div className=" flex items-center justify-center">
  <div className="  flex items-center justify-center text-center h-[180px] w-[400px]">
    <p className='font-bold text-blue-600'>
      Popular Destination <br />
      Unravel the World’s Beauty with Al Rayyan Travel! <br />
      From the Holiest Pilgrimages to the Most Captivating Cruises, We’ve Got <br />
      You Covered!
    </p>
  </div>
    </div>

<div className="grid grid-cols-3 gap-3 ">
  {ratingimg.map((rating, index) => (
    <div
      key={index}
      className="border-2 border-gray-200 rounded-2xl shadow overflow-hidden mx-auto"
    >

      <div className="bg-amber-50 ">
        <Image
          src={rating.img}
          alt="rating"
          width={330}
          height={330}
          className="mx-auto w-full  object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      
      <div className="bg-white p-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <h4 className="font-semibold text-blue-600 text-lg">
            {rating.title}
          </h4>
          <p className="text-gray-500 text-lg">
            {rating.icon}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>




</>

  )
}
