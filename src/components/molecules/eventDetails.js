import styles from "../../css/eventCard.module.css"
import { formatDate } from "@/utils/dateFormater"

export default function EventDetails({title, date, location, description}){
    return <div className={styles.details}>
        <p>Titlu: {title}</p>
        <p>Data: {formatDate(date)}</p>
        <p>Locatia: {location}</p>
        <p>Descriere: {description}</p>
    </div>
}