import React from "react";
import styles from "../../../ui/dashbord/users/addUser/addUser.module.css";
import { addUser } from "@/app/libs/actions";

function AddUser() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username"></input>
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="text" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            isAdmin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>{" "}
        <select name="isActive" id="isActive">
          <option value={false} selected>
            isActive?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea placeholder="address" rows="17" name="address"></textarea>
        <button className={styles.button}>Admit</button>
      </form>
    </div>
  );
}

export default AddUser;
