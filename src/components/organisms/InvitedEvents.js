'use client'

import EventCard from "./EventCard"
import styles from "@/app/events/events.module.css"
import { useState, useEffect } from "react"


export default function InvitedEvents() {
    const [invitedEvents, setInvitedEvents2] = useState([])

    useEffect(() => {
        const getInvitedEvents2 = async () => {
            const response = await fetch("http://localhost:5000/events/invites", {credentials: "include"})
            const data = await response.json()
            
            console.log("aici sunt toate eventurile la care sunt invitat'")
            setInvitedEvents2(data.events);
            }
        getInvitedEvents2()
    }, [])


    return <div className={styles.invitedContainer}>
        <h1 className={styles.header}>Invited</h1>
        <div className={styles.eventsContainer} >
            {invitedEvents?.map((event) => 
                <EventCard key={event._id} event={event} />
            )}
        </div>
    </div>
}