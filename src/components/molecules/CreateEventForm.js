"use client"

import styles from "@/css/adminPanel.module.css"
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers"; // Import the DateTimePicker from @mui/lab
import EventTag from "../atoms/EventTag";
import { useState, useEffect } from "react";

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

function getDeparts(){
    return [
        "departament 1",
        "departament 2",
        "departament 3",
        "departament 4",
        "departament 5"
    ]
    
}

export default function CreateEventForm(){

    const tags = getTags()
    const [tag, setTag] = useState("")
    
    const [users, setUsers] = useState(getUsers())
    const [departs, setDeparts] = useState(getDeparts())

    const [AddPerson, setAddPeople] = useState(false);
    const [AddGroup, setAddGroup] = useState(false);

    const [People, setPeople] = useState([]);
    const [Groups, setGroups] = useState([]);

    const [SelectedPeople, setSelectedPeople] = useState([]);
    const [SelectedGroups, setSelectedGroups] = useState([]);


    useEffect(() => {
        setUsers(users.filter((item) => !People.includes(item)))
    }, [People])

    useEffect(() => {
        setDeparts(departs.filter((item) => !Groups.includes(item)))
    }, [Groups])
    

    const handleUserClick = (user) => (event) => {
        const isUserSelected = SelectedPeople.includes(user);
    
        if (isUserSelected) {
          setSelectedPeople(People.filter((selectedUser) => selectedUser !== user));
        } else {
          setSelectedPeople([...SelectedPeople, user]);
        }
      };

    const showAddPersonClick = () => {
        setAddPeople(true);
    };

    const hideAddPersonClick = () => {
        setSelectedPeople([])
        setAddPeople(false);
    };

    const handleAddPersonClick = () =>{
        setPeople([...People, ...SelectedPeople])
        setSelectedPeople([])
        setAddPeople(false);
    }

    
    const handleGroupClick = (user) => (event) => {
        const isUserSelected = SelectedGroups.includes(user);

        if (isUserSelected) {
            setSelectedGroups(Groups.filter((selectedUser) => selectedUser !== user));
        } else {
            setSelectedGroups([...SelectedGroups, user]);
        }
    };

    const showAddGroupClick = () => {
        setAddGroup(true);
    };

    const hideAddGroupClick = () => {
        setSelectedGroups([])
        setAddGroup(false);
    };

    const handleAddGroupClick = () =>{
        setGroups([...Groups, ...SelectedGroups])
        setSelectedGroups([])
        setAddGroup(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const event = {
            titlu: e.target.titlu.value,
            data: e.target.data.value,
            locatie: e.target.locatie.value,
            descriere: e.target.descriere.value,
            tag: "",
            users: People,
            groups: Groups
        }

        console.log(event);

      };

    return <div className={styles.formContainerEvent}>
        <form className={styles.mainForm} onSubmit={onSubmit}>

            <p >Titlu</p>
            <input name="titlu" className={styles.input} type="text"/>

            <p >Data</p>
            <input name="data" className={styles.input} type="datetime-local"/>

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
                    <div onClick={showAddPersonClick} className={styles.tagWhite}>Add Person</div>
                    <div onClick={showAddGroupClick} className={styles.tagWhite}>Add Group</div>
                </div>
                <div className={styles.tagsContaincer}>

                    {People?.map((person) =>(
                        <div key={person} className={styles.tag}>{person}</div>
                    ))}
                    {Groups?.map((group) =>(
                        <div key={group} className={styles.tag}>{group}</div>
                    ))}

                </div>
            </div>

            {AddPerson && 
                <>
                    <div className={styles.overlay}></div>
                    <div className={styles.modalContent}>
                        <div className={styles.controllContainer}>
                            <input type="search" className={`${styles.input} ${styles.searchBar}`}></input>
                            <input onClick={handleAddPersonClick} className={`${styles.button} ${styles.noMarg}`} type="submit" value="Add" />
                            <input onClick={hideAddPersonClick} className={`${styles.button} ${styles.noMarg}`} type="submit" value="Cancel" />
                        </div>

                        {users && <FormGroup className={styles.usersContainer}>
                            {users.map((user) => (
                                <div key={user} className={styles.userCheck}>
                                    <FormControlLabel control={<Checkbox 
                                            checked={SelectedPeople.includes(user)}
                                            onChange={handleUserClick(user)}
                                        />
                                    } label={user} />
                                </div>
                            ))} 
                        </FormGroup>
                        }
                    </div>
                </>
            }

            {AddGroup && 
                <>
                    <div className={styles.overlay}></div>
                    <div className={styles.modalContent}>
                        <div className={styles.controllContainer}>
                            <input type="search" className={`${styles.input} ${styles.searchBar}`}></input>
                            <input onClick={handleAddGroupClick} className={`${styles.button} ${styles.noMarg}`} type="submit" value="Add" />
                            <input onClick={hideAddGroupClick} className={`${styles.button} ${styles.noMarg}`} type="submit" value="Cancel" />
                        </div>

                        {departs && <FormGroup className={styles.usersContainer}>
                            {departs.map((user) => (
                                <div key={user} className={styles.userCheck}>
                                    <FormControlLabel control={<Checkbox 
                                            checked={SelectedGroups.includes(user)}
                                            onChange={handleGroupClick(user)}
                                        />
                                    } label={user} />
                                </div>
                            ))} 
                        </FormGroup>
                        }
                    </div>
                </>
            }

        </div>

  </div>
} 