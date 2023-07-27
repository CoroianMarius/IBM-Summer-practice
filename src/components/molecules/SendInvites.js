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
import axios from "axios";






function SendInvites() {
    const [events, setEvents]= useState([])
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
  
    const handleSelectEvent = (event) => {
      const selectedEventObject = event.target.value;
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

    const handleSubmin = async () => {

        console.log(selectedEvent);

        const groupsUsers = [];
        const promises = selectedGroups.map(async (group) => {
            try {
                const response = await axios.get(`http://localhost:5000/groups/${group}`, { withCredentials: true });
                const users = response.data.users;
                groupsUsers.push(...users);
            } catch (error) {
                console.error(`Error fetching users for group ${group}:`, error);
                groupsUsers.push([]);
            }
        });

        groupsUsers.push(...selectedUsers);

        // Wrap the callback in an async function
        Promise.all(promises).then(async () => {

            const invites = {
                event: selectedEvent,
                users: selectedUsers
            };
            console.log(invites);
            try {
                const response = await fetch('http://localhost:5000/events/invites', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(invites),
                    credentials: 'include', // This enables sending cookies with the request
                });

                if (!response.ok) {
                    throw new Error('Request failed with status ' + response.status);
                }

                const data = await response.json();
                console.log(data); // Do something with the response data if needed
            } catch (error) {
                console.error(error);
            }
        });
    };

    useEffect(()=>{
        async function getEvents(){
            setEvents((await axios.get('http://localhost:5000/events',{withCredentials:true})).data.events)
        }
        getEvents()
    }, [])
    console.log(events)


    useEffect(() => {
        async function getUsers() {
            if (selectedEvent) { // Check if selectedEvent is not null before making the API call
                try {
                    const response = await axios.get(`http://localhost:5000/events/users/${selectedEvent._id}`, { withCredentials: true });
                    const responseGroups = await axios.get('http://localhost:5000/groups/all', {withCredentials:true});
                    console.log("groups");
                    console.log(responseGroups.data.groups);

                    setGroups(responseGroups.data.groups);
                    setUsers(response.data.users);
                } catch (error) {
                    // Handle any errors that might occur during the API call
                    console.error("Error fetching users:", error);
                }
            }
        }
        getUsers();
    }, [selectedEvent]);




    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Event</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedEvent || ""}
            label="Event"
            onChange={handleSelectEvent}
          >
            {events.map((event) => (
              <MenuItem key={event._id} value={event}>
                {event.title}
              </MenuItem>
            ))}
          </Select>


        </FormControl>
  
        {selectedEvent && (
          <>
            <button onClick={handleSubmin} className={styles.button}>Send Invites</button>
              <div>
                  <h3>Groups</h3>
                  <FormGroup>
                      {groups.map((group) => (
                          <FormControlLabel
                              key={group._id}
                              control={
                                  <Checkbox
                                      checked={selectedGroups.includes(group)}
                                      onChange={handleSelectGroups}
                                      value={group.name}
                                  />
                              }
                              label={group.name}
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
              <div>
              <h3>Users</h3>
              <FormGroup>
                {users.map((user) => (
                  <FormControlLabel
                    key={user._id}
                    control={
                      <Checkbox
                        checked={selectedUsers.includes(user)}
                        onChange={handleSelectPeople}
                        value={user.username}
                      />
                    }
                    label={user.username}
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
  

            

          </>
        )}
      </div>
    );
  }
  
  export default SendInvites;

