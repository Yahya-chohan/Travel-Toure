"use client";
import Card from "@/components/CardSlider";
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
      id: 3,
      singleimg: icon5,
    },
    {
      id: 4,
      title: "AIR DESK",
      detail:
        "Preferred airfare rates on business and premium economy, plus logistical and emergency assistance",
      image: icon3,
    },
    {
      id: 5,
      title: "SIGHTSEEING",
      detail:
        "Customized private and small group touring options to maximize your experience.",
      image: icon4,
    },
  ];

  return (
    <div className="w-full   py-8 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Our Services
      </h2>

      {/* Cards Container (single row, responsive) */}
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="
                    lg:w-1/6
              flex
              justify-center
            "
          >
            <Card card={item} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
