"use client"

import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import styles from "@/css/adminPanel.module.css";
import NavAdmin from "@/components/organisms/NavAdmin";
import AdminSideBar from "../../components/organisms/AdminSidebar";
import {  Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateEventForm from "@/components/molecules/CreateEventForm";

// sa apara evenimentele intai si apoi cand selectezi un eveniment sa apara participanti si grupuri
// sa poti selecta mai multi participanti si grupuri
// sa poti sterge participanti si grupuri
// sa poti adauga participanti si grupuri
// sa poti trimite invitatii


// given the code from CreateEventForm.js, create a new component called SendInvites.js that will have the following functionality:
// - display a list of events (from the getEvents() function) in a dropdown menu (use the Select component from Material UI) and a button that says "Select Event"
// - when the user selects an event from the dropdown menu and clicks the "Select Event" button, the component should display a list of users and groups (from the getUsers() and getGroups() functions) in two separate lists
// - the user should be able to select multiple users and groups from the lists
// - the user should be able to remove users and groups from the lists
// - the user should be able to add users and groups to the lists
// - the user should be able to send invites to the selected users and groups (use the Checkbox component from Material UI)

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

function getUsers(){
    return [
        "user 1",
        "user 2",
        "user 3",
        "user 4",

    ]
}

function getGroups(){
    return [
        "departament 1",
        "departament 2",
        "departament 3",
        "departament 4",
        "departament 5"
    ]
}

function SendInvites() {
    const events = getEvents();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const users = getUsers();
    const groups = getGroups();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
  
    const handleSelectEvent = (event) => {
      const selectedEventId = event.target.value;
      const selectedEventObject = events.find((event) => event.id === selectedEventId);
      setSelectedEvent(selectedEventObject);
      setSelectedUsers([]);
      setSelectedGroups([]);
    };
  
    const handleSelectPeople = (event) => {
      const selectedUser = event.target.value;
      setSelectedUsers((prevSelectedUsers) =>
        prevSelectedUsers.includes(selectedUser)
          ? prevSelectedUsers.filter((user) => user !== selectedUser)
          : [...prevSelectedUsers, selectedUser]
      );
    };
  
    const handleSelectGroups = (event) => {
      const selectedGroup = event.target.value;
      setSelectedGroups((prevSelectedGroups) =>
        prevSelectedGroups.includes(selectedGroup)
          ? prevSelectedGroups.filter((group) => group !== selectedGroup)
          : [...prevSelectedGroups, selectedGroup]
      );
    };
  
    const handleRemoveUser = (user) => {
      setSelectedUsers((prevSelectedUsers) => prevSelectedUsers.filter((u) => u !== user));
    };
  
    const handleRemoveGroup = (group) => {
      setSelectedGroups((prevSelectedGroups) => prevSelectedGroups.filter((g) => g !== group));
    };
    
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Event</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedEvent?.id || ""}
            label="Event"
            onChange={handleSelectEvent}
          >
            {events.map((event) => (
              <MenuItem key={event.id} value={event.id}>
                {event.titlu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
        {selectedEvent && (
          <>
            <div>
              <h3>Users</h3>
              <FormGroup>
                {users.map((user) => (
                  <FormControlLabel
                    key={user}
                    control={
                      <Checkbox
                        checked={selectedUsers.includes(user)}
                        onChange={handleSelectPeople}
                        value={user}
                      />
                    }
                    label={user}
                  />
                ))}
              </FormGroup>
              {selectedUsers.map((user) => (
                <div key={user}>
                  <span>{user}</span>
                  <IconButton onClick={() => handleRemoveUser(user)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
            </div>
  
            <div>
              <h3>Groups</h3>
              <FormGroup>
                {groups.map((group) => (
                  <FormControlLabel
                    key={group}
                    control={
                      <Checkbox
                        checked={selectedGroups.includes(group)}
                        onChange={handleSelectGroups}
                        value={group}
                      />
                    }
                    label={group}
                  />
                ))}
              </FormGroup>
              {selectedGroups.map((group) => (
                <div key={group}>
                  <span>{group}</span>
                  <IconButton onClick={() => handleRemoveGroup(group)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default SendInvites;

