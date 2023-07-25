"use client"

import React, { useState, useContext, useEffect } from "react";
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


export default function AdminPanel() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const selectedMenu = useMenu()

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGrps = async () => {
        const response = await fetch("http://localhost:5000/groups", {credentials: "include"})
        const data = await response.json()
        
        console.log("aici sunt toate eventurile la care sunt invitat'")
        setGroups(data.groups);
        }
        getGrps()
}, [])

  return (
      <>
        <NavAdmin/>
        <div className={styles.container}>
          <div className={styles.sidebar}><AdminSideBar/></div>
          <div className={styles.panelContainer}>
            <div className={styles.panel}>

              {selectedMenu === "Manage Events" && <ManageEvents /> }
              {selectedMenu === "Manage Groups" && <GroupsManagement groups={groups}/> }
              {selectedMenu === "Send Invites" && <SendInvites /> }
              {selectedMenu === "Manage Admins" && <ManageAdmins /> }

            </div>
          </div>
        </div>
      </>
  );
}

