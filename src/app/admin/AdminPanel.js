"use client"

import React, { useState, useContext } from "react";
import GroupsManagement from "@/components/organisms/groupsManagement";
import { AuthContext } from "@/context/AuthContext";
import styles from "./admin.module.css";
import NavAdmin from "@/components/organisms/NavAdmin";
import AdminSideBar from "@/components/organisms/AdminSidebar"
import { AdminSideBarProvider, useMenu } from "@/context/AdminSideBarContext";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  NativeSelect,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import CreateEventForm from "@/components/molecules/CreateEventForm";
import EditEventForm from "@/components/molecules/EditEventForm";
import SendInvites from "@/components/molecules/SendInvites";
import ManageEvents from "@/components/organisms/ManageEvents";

function getGroups()
{
  return [
    {
      name: "HR",
      users: ["user 1"],
    },
    {
      name: "IT",
      users: ["user 1", "user 2", "user 3"],
    },
    {
      name: "Productie",
      users: ["user 1", "user 2"],
    },
  ]
}

function getEvents(){
  return [
    {
      "id": 145223,
      "titlu": "Event 1",
      "data": "2023-07-27T12:21",
      "locatie": "Timisoara",
      "descriere": "Descriere 1",
      "tag": "PainBall",
      "users": [
          "user 1",
          "user 2",
          "user 4"
      ],
      "groups": [
          "departament 2",
          "departament 3"
      ]
  },
  {
    "id": 124324,
    "titlu": "Event 2",
    "data": "2023-07-27T12:21",
    "locatie": "Sibiu",
    "descriere": "Descriere 2",
    "tag": "Movie Night",
    "users": [
        "user 1",
        "user 3",
        "user 4"
    ],
    "groups": [
        "departament 1",
        "departament 3"
    ]
}
  ]
}

export default function AdminPanel() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const events = getEvents()

  const selectedMenu = useMenu()
  console.log(selectedMenu)

  return (
      <>
        <NavAdmin/>
        <div className={styles.container}>
          <div className={styles.sidebar}><AdminSideBar/></div>
          <div className={styles.panelContainer}>
            <div className={styles.panel}>

              {selectedMenu === "Manage Events" && <ManageEvents /> }
              {selectedMenu === "Manage Groups" && <GroupsManagement groups={getGroups()}/> }
              {selectedMenu === "Send Invites" && <SendInvites /> }

              {/* <ManageEvents /> */}
              {/* <GroupsManagement groups={getGroups()}/> */}
              {/* <SendInvites/> */}
            </div>
          </div>
        </div>
      </>
  );
}

