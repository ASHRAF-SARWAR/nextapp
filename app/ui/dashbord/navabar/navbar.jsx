"use client";
import React from "react";
import styles from "./navbar.module.css";
import { MdChat, MdNotifications, MdPublic, MdSearch } from "react-icons/md";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.content}>
        <div className={styles.input}>
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.icons}>
          <MdNotifications size={20} />
          <MdChat size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
