"use client"

import EventCard from "./EventCard"
import AcceptedEventCard from "./AcceptedEventCard"
import styles from "@/app/events/events.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

// function getAcceptedEvents(){
//     return [ 
//         {
//             id: 654651,
//             titlu: "Event 1",
//             data: "12-07-2023 13:00",
//             locatie: "Locatie 1",
//             descriere: "Descriere 1",
//             tags: "Tag 1",
//             participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
//         },
//         {
//             id: 151654,
//             titlu: "Event 2",
//             data: "05-11-2023 08:00",
//             locatie: "Locatie 2",
//             descriere: "Descriere 2",
//             tags: "Tag 2",
//             participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
//         }
//     ]
// }

export default function AcceptedEvents() {

    // const invitedEvents = getAcceptedEvents()

    const [invitedEvents, setEvents] = useState([])

    useEffect(() => {
        async function fetchUndiscoveredEvents(){
        setEvents((await axios.get('http://localhost:5000/events/upcoming',{withCredentials: true})).data.events)
        }
        fetchUndiscoveredEvents()
    },[])

    return <div className={styles.invitedContainer}>
        <h1 className={styles.header}>Accepted</h1>
        <div className={styles.eventsContainer} >
            {invitedEvents?.map((event) => 
                <AcceptedEventCard key={event._id} event={event} />
            )}
        </div>
    </div>
}