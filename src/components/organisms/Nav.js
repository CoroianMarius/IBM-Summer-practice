"use client";

import Link from "next/link";
import styles from "../../app/groups/groups.css";
import image from "../../../public/ibmlogo.png";


function Nav() {
  return (
    <div className="container">            
        <img src="/public/next.svg" alt="logo" className="logo" />       
        <div>
            <ul id="navbarElements">
                <li><a href="/groups">Groups</a></li>
                <li><a href="/groups">Calendar</a></li>
                {/* It will be a btn component */}
                <li><Link href="/login">Login</Link></li>
            </ul>
        </div>
    </div>
  );
}

export default Nav;