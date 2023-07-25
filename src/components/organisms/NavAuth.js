"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../../app/groups/groups.css";
import AuthServices from "@/services/AuthServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
    AuthServices.logout()
      .then(data => {
        if (data.success) {
          setUser(data.user);
          setIsAuthenticated(false);
        } else {
          // Handle logout failure
          console.log('Logout failed');
        }
      })
      .catch(error => {
        // Handle any errors that occur during the logout process
        console.error('Logout error:', error);
      });

      window.location.reload(true)
  };

function NavAuth() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (

    <div className={`container ${clicked ? "active" : ""}`}>
      <Link href="/">
        <img src="/ibmlogo.png" alt="logo" className="logo" />
      </Link>
      <div>
        <ul id="navbarElements" className={`${clicked ? "active" : ""}`}>
          <li>
            <a href="/groupsV2">Groups</a>
          </li>
          <li>
            <a href="/calendar">Calendar</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a onClick={Logout}>Logout</a>
          </li>
        </ul>
      </div>
      <div id="mobile">
        <FontAwesomeIcon
          icon={clicked ? faTimes : faBars}
          onClick={handleClick}
        />
      </div>
    </div>







    // <div className="container">            
    //     <img src="/public/next.svg" alt="logo" className="logo" />       
    //     <div>
    //         <ul id="navbarElements">
    //             <li><a href="/groups">Groups</a></li>
    //             <li><a href="/groups">Calendar</a></li>
    //             {/* It will be a btn component */}
    //             <li><a onClick={Logout}>Logout</a></li>
    //         </ul>
    //     </div>
    // </div>

  );
}

export default NavAuth;