"use client"

import styles from "@/css/adminPanel.module.css"
import { DateTimePicker } from "@mui/x-date-pickers"; // Import the DateTimePicker from @mui/lab


export default function CreateEventForm(){

    const onSubmit = (e) => {
        e.preventDefault();
    
      };

    return <form onSubmit={onSubmit}>
        <p >Titlu</p>
        <input name="titlu" className={styles.input} type="text"/>

        <p >Data</p>
        <input name="titlu" className={styles.input} type="datetime-local"/>

        <p >Locatie</p>
        <input name="locatie" className={styles.input} type="text"/>

        <p >Descriere</p>
        <input name="descriere" className={styles.input} type="text"/>

        <br></br>

        <input className={styles.button} type="submit" value="Create Event" />
  </form>
} 