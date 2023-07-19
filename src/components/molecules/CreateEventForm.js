"use client"

import styles from "@/css/adminPanel.module.css"
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers"; // Import the DateTimePicker from @mui/lab
import EventTag from "../atoms/EventTag";
import { useState } from "react";

function getTags() {
    return [
      "BoardGame Night", 
      "PainBall", 
      "Team Building", 
      "Movie Night"
    ];
  }

function getUsers(){
    return [
        "user 1",
        "user 2",
        "user 3",
        "user 4",
        "user 5"
    ]
    
}

export default function CreateEventForm(){

    const tags = getTags()
    const users = getUsers()
    const [People, setPeople] = useState([]);
    const [Groups, setGroups] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault();
    
      };

    return <div className={styles.formContainerEvent}>
        <form className={styles.mainForm} onSubmit={onSubmit}>

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

        <div className={styles.sideForm}>
            <p >Tag</p> 
            <FormControl fullWidth>
                <NativeSelect
                className={styles.input}
                inputProps={{
                    name: 'age'    
                }}
                >
                    {tags && tags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option> 
                    ))}
                </NativeSelect>
            </FormControl>
            
            <p >Participanti</p> 
            <div className={styles.containerParticipanti}>
                <div className={styles.controllBtns}>
                    <div className={styles.tagWhite}>Add Person</div>
                    <div className={styles.tagWhite}>Add Group</div>
                </div>
                <div className={styles.tagsContaincer}>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                    <div className={styles.tag}>Person 1</div>
                </div>
            </div>

            <div>
                <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <div className={styles.controllContainer}>
                        <input type="search" className={`${styles.input} ${styles.searchBar}`}></input>
                        <input className={`${styles.button} ${styles.noMarg}`} type="submit" value="Cancel" />
                    </div>

                    {users?.map((user) => (
                        <FormControlLabel control={<Checkbox defaultChecked />} label={user} />
                    ))} 

                </div>
            </div>

        </div>

  </div>
} 