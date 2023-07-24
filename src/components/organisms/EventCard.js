import styles from "../../css/eventCard.module.css"
import EventTag from "../atoms/EventTag"
import EventDetails from "../molecules/eventDetails"

export default function EventCard({event}) {

    const {_id, title, date, location, description, tags} = event

    return <>
    <div className={styles.event}>
        {tags !== "" &&
            <div className={styles.tags}>            
                    <EventTag key={_id} tag={tags} />
            </div>
        }   

        <div className={styles.main}>
            <EventDetails title={title} date={date} location={location} description={description} />
            <div className={styles.container}>
                <button className={styles.acceptBtn}>Accept</button>
            </div>
        </div>

    </div>
    <br></br>
    </>

}