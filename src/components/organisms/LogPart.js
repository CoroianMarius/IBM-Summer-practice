import Link from "next/link";
import styles from "../../app/login/index.module.css"

export default function LogPart(){
    return <div className={styles.logpart}> 
        <h1 className={`${styles.colBlue} ${styles.noMarg}`}>Login</h1>
        <p className={styles.colBlue}>Email</p>
        <input className={styles.input} type="text"></input>

        <p className={styles.colBlue}>Password</p>
        <input className={styles.input} type="password"></input>

        <input className={styles.button} type="submit" value="Login"></input>

        <div className={styles.register}>
            <p className={styles.noMarg}>Don't have an account?</p>
            <Link href="/register">Register</Link>
        </div>
    </div>
}