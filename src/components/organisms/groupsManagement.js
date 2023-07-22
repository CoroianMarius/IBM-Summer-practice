import styled from "../../css/eventCard.module.css"
import styles from "@/app/admin/admin.module.css";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import React, {useState} from "react";



function getDeparts(){
    return [
        "departament 1",
        "departament 2",
        "departament 3",
        "departament 4",
        "departament 5"
    ]

}

export default function groupsManagement({groups}){
    const{name, users} = groups

    const [departs, setDeparts] = useState(getDeparts())
    const [AddGroup, setAddGroup] = useState(false);


    const [Groups, setGroups] = useState([]);


    const [SelectedGroups, setSelectedGroups] = useState([]);



    const hideAddGroupClick = () => {
        setSelectedGroups([])
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
        setGroups([...Groups, ...SelectedGroups])
        setSelectedGroups([])
        setAddGroup(false);
    }


    return<>

        <div className={styled.event}>
            <button id={styled.create}>Create group</button>
            <div className={styled.Dept}>
            {groups && groups.map((group)=>(
                <button key={group.name} className={styled.acceptBtn} >{group.name}</button>
            ))
            }
        </div>
        </div>
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