import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Web Dev</span>
      <span className={styles.text}>&copy; All rights are reserved!</span>
    </div>
  );
}

export default Footer;
