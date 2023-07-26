import styles from "../../css/eventCard.module.css"
import EventTag from "../atoms/EventTag"
import EventDetails from "../molecules/eventDetails"
import axios from "axios"

export default function EventCard({event}) {

    const {_id, title, date, location, description, tags} = event

    const acceptInvite = async () => {
        try {
          const response = await axios.put(
            `http://localhost:5000/events/upcoming/${_id}`,
            null, // We don't need to send a request body for this PUT request
            { withCredentials: true } // Set the withCredentials option to send cookies with the request
          );
    
          // The server should respond with the updated event
          const updatedEvent = response.data.event;
          console.log("You accepted the invite. Updated event:", updatedEvent);

          window.location.reload()
    
          // You can perform any additional actions with the updated event if needed
    
        } catch (error) {
          // Handle any errors that might occur during the API call
          console.error("Error accepting invite:", error);
        }
      };

    return <>
    <div className={styles.event}>
        {tags !== "" &&
            <div className={styles.tags}>            
                    <EventTag key={_id} tag={tags} />
            </div>
        }   

        <div className={styles.main}>
            <EventDetails title={title} date={date} location={location} description={description} />
            <div className={styles.container}>
                <button onClick={acceptInvite} className={styles.acceptBtn}>Accept</button>
            </div>
        </div>

    </div>
    <br></br>
    </>

}