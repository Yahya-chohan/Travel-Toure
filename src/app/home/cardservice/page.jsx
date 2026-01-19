import React from "react";
import styles from "@/app/styles/Servicecard.module.css";

export default function Page() {
  const services = [
    {
      
      title: "Our services",
      description:
        "WEmbark on Your Ideal Journey with Us! Discover an Array of Tailored Travel Planning Services, Crafted by Our Expert Concierge Advisors.",
    },
    {

      title: "Hajj and Umrah Packages",
      description:
        "We create special packages for both Hajj and Umrah that include religious rituals, cultural experiences, and comfortable places to stay. Whether you travel alone or with a group, our packages ensure a meaningful pilgrimage to Makkah and Madinah.",
    },
    {
      title: "Flight Tickets",
      description:
        "We help you book flights conveniently, with options tailored to your schedule and budget.",
    },
    {
      title: "Visa Assistance",
      description:
        "We provide help with visa applications to make your travel preparations smoother and more convenient.",
    },
    {
      title: "Hotel Reservations",
      description:
        "We know how important a comfortable stay is, so we offer a variety of hotels to choose from. Whether you want luxury or simplicity, we have options that fit your budget and preferences.",
    },
    {
      title: "Customer Support",
      description:
        "Our helpful customer support team is here for you at every step of your journey. From answering questions to providing help during your trip, we are dedicated to giving you the best service possible.",
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {services.map((service, index) => (
        <div key={index} className={styles.card}>
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
