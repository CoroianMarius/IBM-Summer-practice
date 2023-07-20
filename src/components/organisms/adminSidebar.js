"use client";

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Searchbar from '../molecules/Searchbar';
import styles from '../../css/adminSidebar.css';
export default function Bar() {

    return (
      <div className='sidebar'>
      
        <Sidebar width='100%'>
        <Menu className='sidebarElements'>
          <MenuItem className='sidebarItems'> Manage Events </MenuItem>
          <MenuItem className='sidebarItems'> Manage Groups </MenuItem>
          <MenuItem className='sidebarItems'> Send Invites </MenuItem>
          <MenuItem className='sidebarItems'> Manage Admins </MenuItem>
        </Menu>

      </Sidebar>

      </div>
    );
  }
  