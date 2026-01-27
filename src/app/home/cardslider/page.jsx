"use client";
import { useState } from "react";
import Card from "@/components/CardSlider";
import styles from "@/app/styles/Home.module.css";

import icon1 from "@/assets/icon1.webp";
import icon2 from "@/assets/icon2.webp";
import icon3 from "@/assets/icon3.webp";
import icon4 from "@/assets/icon4.webp";
import icon5 from "@/assets/iconimg3.png";

export default function CardSlider() {
  const cardData = [
    {
      id: 1,
      title: "TRAVEL PARTNER",
      detail:
        "With our unwavering commitment, our travel concierge team is ready to support you throughout every stage of your journey before, during, and after your travels",
      image: icon1,
    },
    {
      id: 2,
      title: "EXCLUSIVE HOTEL PERKS",
      detail:
        "Indulge in negotiated benefits at our partner hotels, including daily breakfast, resort credits, room upgrades, and other enticing amenities",
      image: icon2,
    },
    {
      id: 7,
      singleimg: icon5,
    },
    {
      id: 3,
      title: "AIR DESK",
      detail:
        "Preferred airfare rates on business and premium economy, plus logistical and emergency assistance",
      image: icon3,
    },
    {
      id: 4,
      title: "SIGHTSEEING",
      detail:
        "Customized private and small group touring options to maximize your experience.",
      image: icon4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardData.map((item) => (
            <div key={item.id} className={styles.slide}>
              <Card card={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}