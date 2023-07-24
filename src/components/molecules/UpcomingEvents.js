import styles from '@/css/upcomingEvent.module.css'
import EventMini from "../atoms/EventMini"
import {useEffect, useState} from "react";
import axios, {Axios} from "axios";

export default function UpcomingEvents(){

    const [upcomingEvents, setupcomingEvents] = useState([]);
    useEffect(()=>{
        async function getUpcomingEvents(){
            setupcomingEvents((await axios.get('http://localhost:5000/events/upcoming',{withCredentials:true})).data.events)
        }
        getUpcomingEvents()
    }, [])
    console.log(upcomingEvents)

    return(
        <div className={styles.mainContainer}>
            <p className={styles.header}>Upcoming Events</p>
            {upcomingEvents?.map((upEvents) => 
                <EventMini key={upEvents._id} event={upEvents} />
            )}
        </div>
    )

}