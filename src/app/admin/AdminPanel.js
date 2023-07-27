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
import SendInvites from "@/components/molecules/SendInvites";
import ManageEvents from "@/components/organisms/ManageEvents";
import ManageAdmins from "@/components/organisms/ManageAdmins";
import NotAdmin from "@/components/molecules/NotAdmin";
import NotLogged from "@/components/molecules/NotLogged";


export default function AdminPanel() {
  const {isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <NotLogged />
  }

  if (!isAdmin){
    return <NotAdmin />
  }

  const selectedMenu = useMenu()

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGrps = async () => {
        const response = await fetch("http://localhost:5000/groups/all", {credentials: "include"})
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

