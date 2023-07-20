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
          <MenuItem className='sidebarItems'> Group 1 </MenuItem>
          <MenuItem className='sidebarItems'> Group 2 </MenuItem>
          <MenuItem className='sidebarItems'> Group 3 </MenuItem>
        </Menu>

      </Sidebar>

      </div>
    );
  }
  