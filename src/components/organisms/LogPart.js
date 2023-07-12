"use client";

import Link from "next/link";
import styles from "../../app/login/index.module.css";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import AuthServices from "@/services/AuthServices";

export default function LogPart() {
  const authContext = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.email.value,
      password: e.target.password.value,
    };



    /*

    --------------- Eroare la logare -----------------

    AuthServices.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
      } else console.log(message);
      //setMessage(message)
    });

    --------------------------------------------------

    */


  };

  return (
    <div className={styles.logpart}>
      <h1 className={`${styles.colBlue} ${styles.noMarg}`}>Login</h1>

      <form onSubmit={onSubmit}>
        <p className={styles.colBlue}>Email</p>
        <input name="email" className={styles.input} type="text"></input>

        <p className={styles.colBlue}>Password</p>
        <input name="password" className={styles.input} type="password"></input>

        <input className={styles.button} type="submit" value="Login"></input>
      </form>

      <div className={styles.register}>
        <p className={styles.noMarg}>Don't have an account?</p>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
