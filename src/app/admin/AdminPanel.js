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
import ManageAdmins from "@/components/organisms/ManageAdmins";

function getGroups()
{

    // tr inlocuit cu un get/groups

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



export default function AdminPanel() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const selectedMenu = useMenu()

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
              {selectedMenu === "Manage Admins" && <ManageAdmins /> }

            </div>
          </div>
        </div>
      </>
  );
}

