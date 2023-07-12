"use client";

import Link from "next/link";
import styles from "../../app/login/index.module.css";
import AuthServices from "@/services/AuthServices";

export default function LogPart() {
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.email.value,
      password: e.target.password.value,
      role: "user",
    };

    AuthServices.register(user).then((data) => {
      const { user, message } = data;
      //router.push('/login')
      console.log(user);
      //setMessage(message)
      console.log(message);
    });
  };

  return (
    <div className={styles.logpart}>
      <h1 className={`${styles.colBlue} ${styles.noMarg}`}>Register</h1>

      <form onSubmit={onSubmit}>
        <p className={styles.colBlue}>Email</p>
        <input name="email" className={styles.input} type="text"></input>

        <p className={styles.colBlue}>Password</p>
        <input name="password" className={styles.input} type="password"></input>

        <input className={styles.button} type="submit" value="Register"></input>
      </form>

      <div className={styles.register}>
        <p className={styles.noMarg}>Already have an account?</p>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
