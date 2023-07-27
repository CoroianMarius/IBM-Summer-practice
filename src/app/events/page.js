"use client"

import styles from "@/app/events/events.module.css"
import AcceptedEvents from "@/components/organisms/AcceptedEvent";
import InvitedEvents from "@/components/organisms/InvitedEvents";
import MapControll from "@/components/organisms/MapControll";
import NavAdmin from "@/components/organisms/NavAdmin";
import { useEffect, useState } from "react";
import axios from "axios";
import NavAuth from "@/components/organisms/NavAuth";

export default function Page() {

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

    return <>
        {isAdmin ? <NavAdmin /> : <NavAuth />}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className={styles.mainContainer}>
        <InvitedEvents />
        <AcceptedEvents />
        </div>

        <MapControll />
        
        <br></br>
        <br></br>
        <br></br>

    </>
}