"use client"

import GroupsContainer from "@/components/organisms/GroupsContainer"
import styles from "./groups.module.css";
import { GroupProvider } from "@/context/GroupContext";
import NavAdmin from "@/components/organisms/NavAdmin";
import NavAuth from "@/components/organisms/NavAuth";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page(){

  const [isAdmin, setIsAdmin] = useState(false)

    useEffect(()=>{
        async function verifyAdmin(){
            const adminn = (await axios.get('http://localhost:5000/user/admin',{withCredentials:true})).data.isAdmin;
            if (adminn) {
              setIsAdmin(true)
            }
        }
        verifyAdmin()
    }, [])

    return(
        <>
            {isAdmin ? <NavAdmin /> : <NavAuth />}

            <GroupProvider>
                <GroupsContainer />
            </GroupProvider>
        </>
    )
}