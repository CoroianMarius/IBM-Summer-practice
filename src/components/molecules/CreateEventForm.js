"use client"

import styles from "@/css/adminPanel.module.css"
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers"; // Import the DateTimePicker from @mui/lab
import EventTag from "../atoms/EventTag";
import { useState, useEffect } from "react";
import axios from "axios";

function getTags() {
    return [
      "BoardGame Night", 
      "PainBall", 
      "Team Building", 
      "Movie Night"
    ];
  }


export default function CreateEventForm(){

    const tags = getTags()
    const [selectedTag, setSelectedTag] = useState("")
    
    const [users, setUsers] = useState([])
    const [departs, setDeparts] = useState([])

    const [InitialUsers, setInitialUsers] = useState([])
    const [InitialGroups, setInitialGroups] = useState([])

    const [AddPerson, setAddPeople] = useState(false);
    const [AddGroup, setAddGroup] = useState(false);

    const [People, setPeople] = useState([]);
    const [Groups, setGroups] = useState([]);

    const [SelectedPeople, setSelectedPeople] = useState([]);
    const [SelectedGroups, setSelectedGroups] = useState([]);


    //ia toti userii din grupuri si ii pune intr-un array
    const [invites, setInvites] = useState([])

    useEffect(() => {
        async function getInvites(){
            const response =  await (await axios.get('http://localhost:5000/events/invited-users',{withCredentials:true})).data.invitedUsers
            setInvites(response)
        }
        getInvites()
    },[])
    console.log('aici sunt toti invitatii din grupuri, trebuie sa le trimit mail la fiecare')
    console.log(invites)



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

    const handleTagChange = (event) => {
        setSelectedTag(event.target.value);
      };

    const removePerson = (personToRemove) => {
        const updatedPeople = People.filter((person) => person !== personToRemove);
        setPeople(updatedPeople);
        setUsers(InitialUsers.filter((item) => !updatedPeople.includes(item)))
    }
    const removeGruop = (personToRemove) => {
        const updatedPeople = Groups.filter((person) => person !== personToRemove);
        setGroups(updatedPeople);
        setDeparts(InitialGroups.filter((item) => !updatedPeople.includes(item)))
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        


        }

        


        //aici fac un fetch sa iau toti userii din fiecare grup (array de useri mare va fi)
        //si dupa ii adaug intr-un array   
        //si inlocuesc users si groups cu un singur array de invited 



        // const event = {
        //     title: e.target.titlu.value,
        //     date: e.target.data.value,
        //     location: e.target.locatie.value,
        //     description: e.target.descriere.value,
        //     tags: selectedTag,
        //     users: People,
        //     groups: Groups
        // };
    
    //     try {
    //         const response = await fetch('http://localhost:5000/events', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(event),
    //             credentials: 'include', // This enables sending cookies with the request
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Request failed with status ' + response.status);
    //         }
    
    //         const data = await response.json();
    //         console.log(data); // Do something with the response data if needed
    
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    








    useEffect(()=> {
        async function getUsers(){
            setUsers((await axios.get('http://localhost:5000/user', {withCredentials:true})).data.users)
            setInitialUsers((await axios.get('http://localhost:5000/user', {withCredentials:true})).data.users);
        }
        getUsers()
    }, [])
    console.log(users)



    useEffect(()=> {
        async function getDeparts(){
            setDeparts((await axios.get('http://localhost:5000/groups', {withCredentials:true})).data.groups)
            setInitialGroups((await axios.get('http://localhost:5000/groups', {withCredentials:true})).data.groups)
        }
        getDeparts()
    }, [])
    console.log(departs)








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
                    name: 'tag'    
                }}
                value={selectedTag}
                onChange={handleTagChange}
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
                        <div key={person.id} onClick={() => removePerson(person)} className={styles.tag}>{person.username}</div>
                    ))}
                    {Groups?.map((group) =>(
                        <div key={group.id} onClick={() => removeGruop(group)} className={styles.tag}>{group.name}</div>
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
                                <div key={user.id} className={styles.userCheck}>
                                    <FormControlLabel control={<Checkbox 
                                            checked={SelectedPeople.includes(user)}
                                            onChange={handleUserClick(user)}
                                        />
                                    } label={user.username} />
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
                                <div key={user.id} className={styles.userCheck}>
                                    <FormControlLabel control={<Checkbox 
                                            checked={SelectedGroups.includes(user)}
                                            onChange={handleGroupClick(user)}
                                        />
                                    } label={user.name} />
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