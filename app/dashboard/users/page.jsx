// "use client";
import React from "react";
import styles from "../../ui/dashbord/users/users.module.css";
import Search from "@/app/ui/dashbord/search/search";
import Image from "next/image";
import Pagination from "@/app/ui/dashbord/pagination/pagination";
import Link from "next/link";
import { fetchUsers } from "../../libs/data.js";
import { deleteUser } from "@/app/libs/actions";

async function Users({ searchParams }) {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { count, users } = await fetchUsers(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search user here..."} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New </button>
        </Link>{" "}
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <td className={styles.ImageName}>
                  <Image
                    src={user.image || "/default.png"}
                    alt="img"
                    width="30"
                    height="30"
                    className={styles.img}
                  />
                  <span>{user.username}</span>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "client"}</td>
                <td>{user.isActive ? "Active" : "client"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input name="id" type="hidden" value={user.id}></input>
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default Users;
