"use client"

import styles from "@/app/groupsV2/groups.module.css"
import GroupSideBarV2 from "../molecules/GroupSideBarV2"
import { useGroup } from "@/context/GroupContext"
import GroupsContent from "../molecules/GroupContent"

function getGroups(){
    return [
        {
            "id": 123243,
            "nume": "Group 1",
            "users": [
                "user 1",
                "user 2",
                "user 3",
                "user 4"
            ],
            "notifications": [
                {
                    "date": "12-07-2023",
                    "message": "Mesaj 1"
                },
                {
                    "date": "12-07-2023",
                    "message": "Mesaj 2"
                },{
                    "date": "12-07-2023",
                    "message": "Mesaj 3"
                },
            ]
        },
        {
            "id": 4324,
            "nume": "Group 2",
            "users": [
                "user 1",
                "user 2",
                "user 5",
                "user 10"
            ] ,
            "notifications": [
                {
                    "date": "15-07-2023",
                    "message": "Mesaj 1"
                },
                {
                    "date": "15-07-2023",
                    "message": "Mesaj 2"
                },{
                    "date": "15-07-2023",
                    "message": "Mesaj 3"
                },
            ]
        }
        
    ]
}

export default function GroupsContainer(){

    const selectedGroup = useGroup()

    return(
        <div className={styles.groupContainer}>
            <GroupSideBarV2 groups={getGroups()}/>
            {selectedGroup && <GroupsContent group={selectedGroup}/>}
        </div>
    )
}