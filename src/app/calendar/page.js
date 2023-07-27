"use client"

import React, { useContext, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from  '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import multiMonthPlugin from '@fullcalendar/multimonth'
import NavAdminRel from "@/components/organisms/NavAdminRel"
import styles from '@/app/calendar/calendar.module.css'
import axios from 'axios'
import AuthContext from '@/context/AuthContext'
import NotLogged from '@/components/molecules/NotLogged'
import NotAdmin from '@/components/molecules/NotAdmin'
import NavAuthRel from '@/components/organisms/NavAuthRel'

function getEvents(events){
  
  const modifiedEvents = events.map((event) => ({
    title: event.title,
    date: new Date(event.date).toISOString().slice(0, 16).replace("T", " "),
  }));

  return modifiedEvents
}

export default function page() {

  const [isAdmin, setIsAdmin] = useState(false)

  const [upcomingEvents, setupcomingEvents] = useState([]);
    useEffect(()=>{
        async function getUpcomingEvents(){
            setupcomingEvents((await axios.get('http://localhost:5000/events/upcoming',{withCredentials:true})).data.events)
            const adminn = (await axios.get('http://localhost:5000/user/admin',{withCredentials:true})).data.isAdmin;
            if (adminn) {
              setIsAdmin(true)
            }
        }
        getUpcomingEvents()
    }, [])

  return <>

    {isAdmin ? <NavAdminRel /> : <NavAuthRel />}
  
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
