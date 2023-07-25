"use client"

import GroupsContainer from "@/components/organisms/GroupsContainer"
import styles from "./groups.module.css";
import { GroupProvider } from "@/context/GroupContext";
import NavAdmin from "@/components/organisms/NavAdmin";

export default function Page(){
    return(
        <>
        <NavAdmin />

        <GroupProvider>
            <GroupsContainer />
        </GroupProvider>
        </>
    )
}