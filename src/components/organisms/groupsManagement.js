import styled from "../../css/eventCard.module.css"
import styles from "@/app/admin/admin.module.css";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import axios from "axios";
import React, {useState, useEffect} from "react";



function getUsers(){

    // tr inlocuit cu un get/users (si useri normali si admins)

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

    const [departs, setDeparts] = useState([]);
    
    useEffect(() => {
        const getDeparts = async () => {
            const response = await fetch("http://localhost:5000/user", {credentials: "include"})
            const data = await response.json()

            console.log("aici sunt toate departamentele")
            setDeparts(data.users);
            }
            getDeparts()
    }, [])

    const [AddGroup, setAddGroup] = useState(false);
    const [EditGroup, setEditGroup] = useState(false);

    const [Groups, setGroups] = useState(groups);
    const [SelectedGroups, setSelectedGroups] = useState([]);
    const [EditedGroup, setEditedGroup] = useState(null)
    const [CheckedUsers, setCheckedUsers] = useState([])

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

        //make a request to the server to create a new group with the data from the form and the user id from the context (the user that created the group)
        // axios.post("http://localhost:5000/groups", group, {withCredentials: true})
        // .then(res => {
        //     console.log(res)
        // }
        // )
        // .catch(err => {
        //     console.log(err)
        // }
        // )

        
    }


    const hideEditGroupClick = () => {
        setSelectedGroups([])
        setGroupName("")
        setEditGroup(false);
    };

    const showEditGroupClick = (group) => {
        setEditedGroup(group)
        setCheckedUsers(group.users)
        setGroupName(group.name)
        setEditGroup(true);
    };

    const handleGroupItemClick = (user) => () => {
        // if (EditedGroup.users.includes(user)) {
        //   // User is already in the group, remove it
        //   setEditedGroup((prevGroup) => ({
        //     ...prevGroup,
        //     users: prevGroup.users.filter((u) => u !== user),
        //   }));
        // } else {
        //   // User is not in the group, add it
        //   setEditedGroup((prevGroup) => ({
        //     ...prevGroup,
        //     users: [...prevGroup.users, user],
        //   }));
        // }

        if (CheckedUsers.includes(user)) {
            // User is already in the CheckedUsers, remove it
            setCheckedUsers((prevUsers) => prevUsers.filter((u) => u !== user));
          } else {
            // User is not in the CheckedUsers, add it
            setCheckedUsers((prevUsers) => [...prevUsers, user]);
          }


      };
      

    const handleEditGroupClick = () =>{

        const updatedGroup = {
            name: GroupName,
            users: CheckedUsers,
        };
        const updatedGroups = Groups.map((group) =>
            group === EditedGroup ? updatedGroup : group
        );

        setGroups(updatedGroups);

        setSelectedGroups([])
        setGroupName("")
        setEditGroup(false);

        console.log(EditedGroup);
        console.log(updatedGroup); // put group in db (inlocuieste EditedGroup cu updatedGroup)
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
                            <div key={user._id} className={styles.userCheck}>
                                <FormControlLabel control={<Checkbox
                                    checked={SelectedGroups.includes(user)}
                                    onChange={handleGroupClick(user)}
                                />
                                } label={user.username} />
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


                    {departs && (
                    <FormGroup className={styles.usersContainer}>
                        {departs.map((user) => (
                            <div key={user} className={styles.userCheck}>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={CheckedUsers.includes(user)}
                                    onChange={handleGroupItemClick(user)}
                                    />
                                }
                                label={user}
                                />
                            </div>
                        ))}
                    </FormGroup>
                    )}

                </div>
            </>
        }

    </>
}