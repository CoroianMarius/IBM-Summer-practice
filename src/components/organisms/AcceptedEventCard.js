import axios from 'axios';
import React from 'react';
import styled from "../../css/eventCard.module.css";
import EventTag from "../atoms/EventTag";
import EventDetails from "../molecules/eventDetails";

export default function EventCard({ event }) {
  const { _id, title, date, location, description, tags } = event;

  const leaveEvent = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/events/remove/${_id}`,
        null,
        { withCredentials: true }
      );

      const updatedEvent = response.data.event;
      console.log("You left the event. Updated event:", updatedEvent);
      window.location.reload();

    } catch (error) {
      // Handle any errors that might occur during the API call
      console.error("Error leaving event:", error);
    }
  };

  return (
    <>
      <div className={styled.event}>
        {tags !== "" && (
          <div className={styled.tags}>
            <EventTag key={_id} tag={tags} />
          </div>
        )}

        <div className={styled.main}>
          <EventDetails title={title} date={date} location={location} description={description} />
          <div className={styled.container}>
            <button onClick={leaveEvent} className={styled.leaveBtn}>
              Leave
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
