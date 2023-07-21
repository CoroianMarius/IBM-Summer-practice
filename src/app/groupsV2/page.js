"use client"

import NavAuth from "@/components/organisms/NavAuth";
import GroupsContainer from "@/components/organisms/GroupsContainer"
import styles from "./groups.module.css";
import { GroupProvider } from "@/context/GroupContext";

export default function Page(){
    return(
        <>
        <NavAuth />

        <GroupProvider>
            <GroupsContainer />
        </GroupProvider>
        </>
    )
}