import styles from '@/css/upcomingEvent.module.css'
import { formatDate } from "@/utils/dateFormater"

export default function EventMini({event}){
    return(
    <div className={styles.details}>
        <p className={styles.paddLeft}>{event.title}</p>
        <p className={styles.paddRight}>{ formatDate(event.date) }</p>
    </div>
    )
}