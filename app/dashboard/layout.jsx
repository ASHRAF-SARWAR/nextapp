import Navbar from "@/app/ui/dashbord/navabar/navbar";
import Sidebar from "@/app/ui/dashbord/sidebar/sidebar";
import styles from "../ui/dashbord/dashboard.module.css";
import React from "react";
import Footer from "../ui/dashbord/footer/footer";
import { connectDB } from "../libs/utils.js";

function layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default layout;
