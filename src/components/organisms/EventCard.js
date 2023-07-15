import styled from "../../css/eventCard.module.css"
import EventTag from "../atoms/EventTag"
import EventDetails from "../molecules/eventDetails"

export default function EventCard({event}) {

    const {titlu, data, locatie, descriere, tags} = event

    return <>
    <div className={styled.event}>
        <div className={styled.tags}>
            {tags && tags.map((tag) => (
                <EventTag tag={tag} />
            ))} 
        </div>

        <div className={styled.main}>
            <EventDetails titlu={titlu} data={data} locatie={locatie} descriere={descriere} />
            <div className={styled.container}>
                <button className={styled.acceptBtn}>Accept</button>
            </div>
        </div>

    </div>
    <br></br>
    </>

}