"use client";

import EventCard from "@/components/organisms/EventCard";
import groupsManagement from "@/components/organisms/groupsManagement";
import Nav from "@/components/organisms/Nav";
import NavAdmin from "@/components/organisms/NavAdmin";
import NavAuth from "@/components/organisms/NavAuth";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect,useState } from "react";
import styles from "@/css/homepage.module.css";
import axios from "axios";
import UpcomingEvents from "@/components/molecules/UpcomingEvents";
import NotLogged from "@/components/molecules/NotLogged";



// TODO: de implementat verificare daca userul e admin in AuthServices
function isAdmin() {
  return true;
}



export default function Home(props) {

  const { isAuthenticated, isAdmin} = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchUndiscoveredEvents(){
      setEvents((await axios.get('http://localhost:5000/events/discover',{withCredentials: true})).data.events)
    }
    fetchUndiscoveredEvents()
  },[])

  if (!isAuthenticated) {
    return <NotLogged />
  }

  return (
    <>
      {isAdmin ? <NavAdmin /> : <NavAuth />}
      
      <br></br>
      <br></br>
      <br></br>

      <div className={styles.mainContainer}>
        <div className={styles.discoverEvents}>
          <h1 className={styles.discoverHeader}>Discover Events</h1>
          {events && events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>

        <UpcomingEvents />
      </div>

    </>
  );
}
