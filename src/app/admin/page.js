"use client"

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import styles from "./admin.module.css";
import NavAdmin from "@/components/organisms/NavAdmin";
import AdminSideBar from "@/components/organisms/adminSidebar"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CreateEventForm from "@/components/molecules/CreateEventForm";

export default function AdminPanel() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const [selectedValue, setSelectedValue] = useState("create");

  const handleToggleChange = (event, newValue) => {
    setSelectedValue(newValue);

  };

  return (
    <>
      <NavAdmin />
      <div className={styles.container}>
        <div className={styles.sidebar}> <AdminSideBar className={`${styles.noMarg} ${styles.posRel}`}/> </div>
          <div className={styles.panelContainer}>
            <div className={styles.panel}>

              <ToggleButtonGroup
                className={styles.toggleGroup}
                value={selectedValue}
                exclusive
                onChange={handleToggleChange}
              >
                <ToggleButton value="create" >
                  Create
                </ToggleButton>
                <ToggleButton value="edit" >
                  Edit
                </ToggleButton>
              </ToggleButtonGroup>

              <CreateEventForm />

            </div>
          </div>
      </div>
    </>
  );
}

