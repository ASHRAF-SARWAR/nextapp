"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${path}?${params}`);
  };

  return (
    <div className={styles.input}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.SearchInput}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
