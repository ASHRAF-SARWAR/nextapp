import React from "react";
import styles from "../ui/dashbord/dashboard.module.css";
import Card from "../ui/dashbord/card/card";
import Transaction from "../ui/dashbord/transaction/transaction";
import Chart from "../ui/dashbord/chart/chart";
import RightBar from "../ui/dashbord/rightbar/rightbar";

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}

export default Dashboard;
