"use client";
import Link from "next/link";
import React from "react";
import styles from "./menuLinks.module.css";
import { usePathname } from "next/navigation";

function MenuLink({ cat }) {
  const path = usePathname();
  return (
    <Link
      href={cat.path}
      className={`${styles.container} ${
        path === cat.path ? styles.active : null
      } `}
    >
      {cat.icon}
      {cat.title}
    </Link>
  );
}

export default MenuLink;
