import Link from "next/link";
import styles from "../../app/login/index.module.css"

export default function LogPart(){
    return <div className={styles.logpart}> 
        <h1 className={`${styles.colBlue} ${styles.noMarg}`}>Register</h1>
        <p className={styles.colBlue}>Email</p>
        <input className={styles.input} type="text"></input>

        <p className={styles.colBlue}>Password</p>
        <input className={styles.input} type="password"></input>

        <input className={styles.button} type="submit" value="Register"></input>

        <div className={styles.register}>
            <p className={styles.noMarg}>Already have an account?</p>
            <Link href="/login">Login</Link>
        </div>
    </div>
}