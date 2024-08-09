import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt=""
            width="150"
            height="150"
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Available Now!</span>
          <h3 className={styles.title}>
            How to learb new version of Admin Dashboard?
          </h3>
          <span className={styles.learn}>How to learn in just 4 minutes!</span>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            reprehenderit, exercitationem?
          </p>

          <button type="button" className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀Comming Soon!</span>
          <h3 className={styles.title}>
            New Server renders are available, partial actions are coming soon!
          </h3>
          <span className={styles.learn}>Boost your experience!</span>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            reprehenderit, exercitationem?
          </p>
          <button type="button" className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
