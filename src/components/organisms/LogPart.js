"use client";

import Link from "next/link";
import styles from "../../app/login/index.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import AuthServices from "@/services/AuthServices";
import { useRouter } from "next/navigation";

export default function LogPart() {

  const router = useRouter();
  const authContext = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(user);

    AuthServices.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        router.push("/");
      } else console.log(message);
    });
  };

  return (
    <div className={styles.logpart}>
      <h1 className={`${styles.colBlue} ${styles.noMarg}`}>Login</h1>

      <form onSubmit={onSubmit}>
        <p className={styles.colBlue}>Email</p>
        <input
          name="email"
          className={styles.input}
          type="text"
        />

        <p className={styles.colBlue}>Password</p>
        <input
          name="password"
          className={styles.input}
          type="password"
        />

        <input className={styles.button} type="submit" value="Login" />
      </form>

      <div className={styles.register}>
        <p className={styles.noMarg}>Don't have an account?</p>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
