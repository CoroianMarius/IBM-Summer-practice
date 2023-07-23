import EventCard from "./EventCard"
import styles from "@/app/events/events.module.css"

function getInvitedEvents(){
    return [ 
        {
            id: 654651,
            titlu: "Event 1",
            data: "12-07-2023 13:00",
            locatie: "Locatie 1",
            descriere: "Descriere 1",
            tags: "Tag 1",
            participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
        },
        {
            id: 151654,
            titlu: "Event 2",
            data: "05-11-2023 08:00",
            locatie: "Locatie 2",
            descriere: "Descriere 2",
            tags: "Tag 2",
            participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
        }
    ]
}

export default function InvitedEvents() {

    const invitedEvents = getInvitedEvents()

    return <div className={styles.invitedContainer}>
        <h1 className={styles.header}>Invited</h1>
        <div className={styles.eventsContainer} >
            {invitedEvents?.map((event) => 
                <EventCard key={event.id} event={event} />
            )}
        </div>
    </div>
}