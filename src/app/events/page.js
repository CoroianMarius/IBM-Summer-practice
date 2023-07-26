
import styles from "@/app/events/events.module.css"
import LocationMap from "@/components/molecules/LocationMap";
import AcceptedEvents from "@/components/organisms/AcceptedEvent";
import InvitedEvents from "@/components/organisms/InvitedEvents";
import MapControll from "@/components/organisms/MapControll";
import NavAdmin from "@/components/organisms/NavAdmin";

export default function Page() {

    return <>
        <NavAdmin />

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