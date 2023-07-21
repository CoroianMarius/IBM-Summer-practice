import styled from "../../css/eventCard.module.css"

export default function EventDetails({title, date, location, description}){
    return <div className={styled.details}>
        <p>Titlu: {title}</p>
        <p>Data: {date}</p>
        <p>Locatia: {location}</p>
        <p>Descriere: {description}</p>
    </div>
}