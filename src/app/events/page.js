import styles from "@/app/events/events.module.css"
import AcceptedEvents from "@/components/organisms/AcceptedEvent";
import InvitedEvents from "@/components/organisms/InvitedEvents";
import NavAuth from "@/components/organisms/NavAuth";


export default function Page() {
    return <>
        <NavAuth />

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
    </>
}