"use client";

import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  const ITEM_PER_PAGE = 4;

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * parseInt(page) < count;

  const handleChange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${path}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChange("next")}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
