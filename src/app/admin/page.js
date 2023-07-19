"use client"

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import NavAdmin from "@/components/organisms/NavAdmin";
import styles from "./admin.module.css";
import Nav from "@/components/organisms/Nav";
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
      <Nav />
      <div className={styles.container}>
        <div className={styles.sidebar}>SideBar</div>
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

