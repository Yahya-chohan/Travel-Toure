import styles from "@/app/styles/Card.module.css";
import Image from "next/image";

export default function Card({ card }) {
  return (
    <>

   {card.title && <div className={styles.card}>
       <Image
        src={card.image}
        alt={card.title}
        width="5px"  
        height="5px"  
         layout="fixed"
      />
      <h2 className={styles.title}>{card.title}</h2>
      <p>{card.detail}</p>
    </div>}

    {card.singleimg  &&
    <div className={styles.card}>
       <Image
        src={card.singleimg}
        alt="ee"
        width="5px"  
        height="5px"  
         layout="fixed"
      />
      
    </div>
}
    </>
  );
}