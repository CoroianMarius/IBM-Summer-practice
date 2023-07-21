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






// TODO: de implementat verificare daca userul e admin in AuthServices
function isAdmin() {
  return true;
}

// function getEvents() {

//   return [
//     {
//       id: 654651,
//       titlu: "Event 1",
//       data: "12-07-2023 13:00",
//       locatie: "Locatie 1",
//       descriere: "Descriere 1",
//       tags: ["Tag 1", "Tag 2", "Tag 3"],
//       participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
//     },
//     {
//       id: 151654,
//       titlu: "Event 2",
//       data: "05-11-2023 08:00",
//       locatie: "Locatie 2",
//       descriere: "Descriere 2",
//       tags: ["Tag 1", "Tag 2", "Tag 3"],
//       participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
//     },
//   ];
// }

export default function Home(props) {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
  const [events, setEvents] = useState([]);

  // const events = getEvents();


  useEffect(() => {
    async function fetchUndiscoveredEvents(){
      setEvents((await axios.get('http://localhost:5000/events/discover',{withCredentials: true})).data.events)
    }
    fetchUndiscoveredEvents()
  },[])
  console.log(events)

  return (
    <>
      {isAuthenticated ? isAdmin() ? <NavAdmin /> : <NavAuth /> : <Nav />}
      
      <br></br>
      <br></br>
      <br></br>

      <div className={styles.discoverEvents}>
        <h1 className={styles.discoverHeader}>Discover Events</h1>
        {events && events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      
    </>
  );
}
