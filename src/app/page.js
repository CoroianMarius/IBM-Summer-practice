"use client";

import EventCard from "@/components/organisms/EventCard";
import Nav from "@/components/organisms/Nav";
import NavAdmin from "@/components/organisms/NavAdmin";
import NavAuth from "@/components/organisms/NavAuth";
import { AuthContext } from "@/context/AuthContext";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import uuid from "react-uuid";

// TODO: de implementat verificare daca userul e admin in AuthServices
function isAdmin() {
  return false;
}

function getEvents() {
  return [
    {
      id: 654651,
      titlu: "Event 1",
      data: "12-07-2023 13:00",
      locatie: "Locatie 1",
      descriere: "Descriere 1",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
    },
    {
      id: 151654,
      titlu: "Event 2",
      data: "05-11-2023 08:00",
      locatie: "Locatie 2",
      descriere: "Descriere 2",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      participanti: ["User 1", "User 2", "User 3", "User 4", "User 5"],
    },
  ];
}

export default function Home(props) {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const events = getEvents();

  return (
    <>
      {isAuthenticated ? isAdmin() ? <NavAdmin /> : <NavAuth /> : <Nav />}
      
      <br></br>
      <br></br>
      <br></br>

      {events && events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      
    </>
  );
}
