import React from "react";
import styles from "../../../ui/dashbord/users/viewUser/viewUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/libs/data";
import { updateUser } from "@/app/libs/actions";

async function ViewUser({ params }) {
  const { id } = params;
  const user = await fetchUser(id);

  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Image
          src={user.image || "/default.png"}
          alt=""
          width="130"
          height="130"
          className={styles.Image}
        />
        <span className={styles.title}>{user.username}</span>
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" value={user.id} name="id" />
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="username"
          ></input>
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email" />
          <label>Password</label>
          <input type="password" placeholder="password" name="password" />
          <label>Phone</label>
          <input type="text" placeholder={user.phone} name="phone" />
          <label>Address</label>
          <input placeholder={user.address} name="address"></input>
          <label>IsAdmin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>IsActive?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default ViewUser;
