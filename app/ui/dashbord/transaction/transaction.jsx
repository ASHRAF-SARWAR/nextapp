import React from "react";
import styles from "./transaction.module.css";
import Image from "next/image";

function Transaction() {
  return (
    <div className={styles.container}>
      <div className={styles.transaction}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ImageName}>
                <Image
                  src="/default.png"
                  alt="img"
                  width="40"
                  height="40"
                  className={styles.img}
                />
                <span className={styles.name}> Ashraf Sarwar</span>
              </td>
              <td>
                <span className={`${styles.done} ${styles.status}`}>
                  Pending
                </span>
              </td>
              <td className={styles.date}>03.07.2024</td>
              <td className={styles.amount}>100</td>
            </tr>
            <tr>
              <td className={styles.ImageName}>
                <Image
                  src="/default.png"
                  alt="img"
                  width="40"
                  height="40"
                  className={styles.img}
                />
                <span className={styles.name}> Ashraf Sarwar</span>
              </td>
              <td>
                <span className={`${styles.done} ${styles.status}`}>
                  Pending
                </span>
              </td>
              <td className={styles.date}>03.07.2024</td>
              <td className={styles.amount}>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;
