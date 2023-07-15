import styled from "../../css/eventCard.module.css"

export default function EventDetails({titlu, data, locatie, descriere}){
    return <div className={styled.details}>
        <p>Titlu: {titlu}</p>
        <p>Data: {data}</p>
        <p>Locatia: {locatie}</p>
        <p>Descriere: {descriere}</p>
    </div>
}