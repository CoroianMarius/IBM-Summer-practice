"use client";

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {useState} from "react";
import { Link } from 'react-router-dom';
import Searchbar from '../molecules/Searchbar';
import styles from '../../css/groupsSidebar.css';
import SendInvites from '../molecules/SendInvites';
export default function Bar() {

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className='sidebar'>
      <Sidebar width='100%'>
        <Menu className='sidebarElements'>
          <MenuItem className='sidebarItems' onClick={() => handleMenuItemClick('Manage Events')}>
            Manage Events
          </MenuItem>
          <MenuItem className='sidebarItems' onClick={() => handleMenuItemClick('Manage Groups')}>
            Manage Groups
          </MenuItem>
          <MenuItem className='sidebarItems' onClick={() => handleMenuItemClick('Send Invites')}>
            Send Invites
          </MenuItem>
          <MenuItem className='sidebarItems' onClick={() => handleMenuItemClick('Manage Admins')}>
            Manage Admins
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* Conditionally render the component based on the selectedMenuItem */}
      {selectedMenuItem === 'Send Invites' && <SendInvites /> || selectedMenuItem === 'Manage Events' && <ManageEvents /> || selectedMenuItem === 'Manage Groups' && <ManageGroups /> || selectedMenuItem === 'Manage Admins' && <ManageAdmins />}
      {/* Add other components to render based on selectedMenuItem */}
    </div>
  );
  }
  