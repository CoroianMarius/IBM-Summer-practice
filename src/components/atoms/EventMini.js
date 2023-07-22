import styles from '@/css/upcomingEvent.module.css'

export default function EventMini({event}){
    return(
    <div className={styles.details}>
        <p className={styles.paddLeft}>{event.title}</p>
        <p className={styles.paddRight}>{event.date}</p>
    </div>
    )
}