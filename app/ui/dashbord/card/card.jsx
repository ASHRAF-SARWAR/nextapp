import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.cardDetails}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.734 %</span>
        <span className={styles.cardDesc}>
          <span className={styles.positive}>10%</span> more than positive work
        </span>
      </div>
    </div>
  );
}

export default Card;
