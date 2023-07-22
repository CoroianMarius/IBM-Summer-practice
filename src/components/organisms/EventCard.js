import styled from "../../css/eventCard.module.css"
import EventTag from "../atoms/EventTag"
import EventDetails from "../molecules/eventDetails"

export default function EventCard({event}) {

    const {_id, title, date, location, description, tags} = event

    return <>
    <div className={styled.event}>
        {tags !== "" &&
            <div className={styled.tags}>            
                    <EventTag key={_id} tag={tags} />
            </div>
        }   

        <div className={styled.main}>
            <EventDetails title={title} date={date} location={location} description={description} />
            <div className={styled.container}>
                <button className={styled.acceptBtn}>Accept</button>
            </div>
        </div>

    </div>
    <br></br>
    </>

}