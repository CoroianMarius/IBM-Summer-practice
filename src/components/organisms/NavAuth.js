"use client";

import Link from "next/link";
import styles from "../../app/groups/groups.css";
import image from "../../../public/ibmlogo.png";
import AuthServices from "@/services/AuthServices";

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
  return (
    <div className="container">            
        <img src="/public/next.svg" alt="logo" className="logo" />       
        <div>
            <ul id="navbarElements">
                <li><a href="/groups">Groups</a></li>
                <li><a href="/groups">Calendar</a></li>
                {/* It will be a btn component */}
                <li><a onClick={Logout}>Logout</a></li>
            </ul>
        </div>
    </div>
  );
}

export default NavAuth;