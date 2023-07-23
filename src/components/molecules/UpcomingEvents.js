import styles from '@/css/upcomingEvent.module.css'
import EventMini from "../atoms/EventMini"
import {useEffect, useState} from "react";
import axios, {Axios} from "axios";

function getUpEvent(){
    return [
        {
            "_id": "64ba8be0e0c4df213cd6f7b9",
            "title": "title3",
            "date": "2023-07-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        }


        ,
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        },
        {
            "_id": "64b48be0e0c4df213cd6f7b9",
            "title": "title1",
            "date": "2023-09-18T12:00:00.000Z",
            "location": "Brasov",
            "description": "description3",
            "tags": "tag4",
            "invites": [],
            "participants": []
        }
    ]
}

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