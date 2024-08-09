import React from "react";
import styles from "../ui/dashbord/login/login.module.css";
import { authentication } from "../libs/actions";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Login</h1>
        <form action={authentication}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
