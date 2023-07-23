"use client"

import styles from "@/app/groupsV2/groups.module.css"
import { useGroup, useGroupUpdate } from "@/context/GroupContext"

export default function GroupMenuButton({group}){
    const setGroup = useGroupUpdate();

    const handleGroupClick = () => {
        setGroup(group);
    };

    return(
        <div onClick={handleGroupClick} className={`${styles.groupMenuButton} `}>{group.name}</div>
    )
}