import styled from "../../css/eventCard.module.css"
import styles from "@/app/admin/admin.module.css";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import React, {useState} from "react";



function getUsers(){
    return [
        "departament 1",
        "departament 2",
        "departament 3",
        "departament 4",
        "departament 5",
        "user 1",
        "user 2",
        "user 3",
        
    ]
}

export default function groupsManagement({groups}){

    const{name, users} = groups

    const [departs, setDeparts] = useState(getUsers())   // in loc de getDeparts functie care returneaza toti utilizatorii

    const [AddGroup, setAddGroup] = useState(false);
    const [EditGroup, setEditGroup] = useState(false);

    const [Groups, setGroups] = useState(groups);
    const [SelectedGroups, setSelectedGroups] = useState([]);
    const [EditedGroup, setEditedGroup] = useState(null)

    const [GroupName, setGroupName] = useState("")

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value)
    }

    const hideAddGroupClick = () => {
        setSelectedGroups([])
        setGroupName("")
        setAddGroup(false);
    };

    const showAddGroupClick = () => {
        setAddGroup(true);
    };

    const handleGroupClick = (user) => (event) => {
        const isUserSelected = SelectedGroups.includes(user);

        if (isUserSelected) {
            setSelectedGroups(Groups.filter((selectedUser) => selectedUser !== user));
        } else {
            setSelectedGroups([...SelectedGroups, user]);
        }
    };

    const handleAddGroupClick = () =>{

        const group = {
            name: GroupName,
            users: SelectedGroups
        }
        setGroups([...Groups, group])
        setSelectedGroups([])
        setGroupName("")
        setAddGroup(false);

        console.log(group); // post group in db
    }


    const hideEditGroupClick = () => {
        setSelectedGroups([])
        setGroupName("")
        setEditGroup(false);
    };

    const showEditGroupClick = (group) => {
        setEditedGroup(group)
        console.log(group);
        setGroupName(group.name)
        setEditGroup(true);
    };

    const handleEditGroupClick = () =>{

        const group = {
            name: GroupName,
            users: SelectedGroups
        }

        console.log(Groups);
        const filteredEvents = Groups.filter((event) => event.id !== EditedGroup);

        console.log(filteredEvents);


        setGroups([...filteredEvents, group])
        setSelectedGroups([])
        setGroupName("")
        setAddGroup(false);

        console.log(group); // post group in db
    }



    return<>

        <div className={styled.event}>
            <button onClick={showAddGroupClick} id={styled.create}>Create group</button>
            <div className={styled.Dept}>
                {Groups && Groups.map((group)=>(
                    <button onClick={ () => showEditGroupClick(group)} key={group.name} className={styled.acceptBtn} >{group.name}</button>
                ))
                }
            </div>
        </div>

        
        {/* ---------------------- Overlay Add Group ---------------------- */}

        {AddGroup && 
            <>
                <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    
                    <div className={styles.controllContainer}>
                        <input onClick={handleAddGroupClick} className={`${styles.button} ${styles.noMarg} ${styles.margTop}`} type="submit" value="Add" />
                        <input onClick={hideAddGroupClick} className={`${styles.button} ${styles.noMarg} ${styles.margTop}`} type="submit" value="Cancel" />
                    </div>
                    
                    <div className={`${styles.controllContainer} ${styles.spaceBetween}`}>
                        <p className={styles.textP}>Group Name</p>
                        <input
                            type="search"
                            className={`${styles.input} ${styles.searchBar}`}
                            value={GroupName}
                            onChange={handleGroupNameChange}
                        />
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


        {/* ---------------------- Overlay Edit Group ---------------------- */}

        {EditGroup && 
            <>
                <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    
                    <div className={styles.controllContainer}>
                        <input onClick={handleEditGroupClick} className={`${styles.button} ${styles.noMarg} ${styles.margTop}`} type="submit" value="Edit" />
                        <input onClick={hideEditGroupClick} className={`${styles.button} ${styles.noMarg} ${styles.margTop}`} type="submit" value="Cancel" />
                    </div>
                    
                    <div className={`${styles.controllContainer} ${styles.spaceBetween}`}>
                        <p className={styles.textP}>Group Name</p>
                        <input
                            type="search"
                            className={`${styles.input} ${styles.searchBar}`}
                            value={GroupName}
                            onChange={handleGroupNameChange}
                        />
                    </div>

                    {departs && <FormGroup className={styles.usersContainer}>
                        {departs.map((user) => (
                            <div key={user} className={styles.userCheck}>
                                <FormControlLabel control={<Checkbox
                                    checked={EditedGroup.users.includes(user)}
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

    </>
}