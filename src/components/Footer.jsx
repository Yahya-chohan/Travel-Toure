import React from "react";
import Image from "next/image";
import bgimg from "@/assets/footerbg.png";
import styles from "@/app/styles/Footer.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src={bgimg}
        alt="Background"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.content}>
        <h1>Welcome</h1>
        <p>This is background image page</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}