"use client"

import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from  '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import multiMonthPlugin from '@fullcalendar/multimonth'
import NavAdminRel from "@/components/organisms/NavAdminRel"
import styles from '@/app/calendar/calendar.module.css'
import axios from 'axios'

function getEvents(events){
  
  const modifiedEvents = events.map((event) => ({
    title: event.title,
    date: new Date(event.date).toISOString().slice(0, 16).replace("T", " "),
  }));

  return modifiedEvents
}

export default function page() {

  const [upcomingEvents, setupcomingEvents] = useState([]);
    useEffect(()=>{
        async function getUpcomingEvents(){
            setupcomingEvents((await axios.get('http://localhost:5000/events/upcoming',{withCredentials:true})).data.events)
        }
        getUpcomingEvents()
    }, [])

  return <>
    <NavAdminRel />

    <div className={styles.main}>
      <FullCalendar
        plugins={[ multiMonthPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today,prev,next", 
          center: "title",
          end: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"75vh"}
        events={getEvents(upcomingEvents)}
      />
    </div>
  </>
}
