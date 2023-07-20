"use client";

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Searchbar from '../molecules/Searchbar';
import styles from '../../css/adminSidebar.css';
export default function Bar() {

    return (
      <div className='sidebar'>
      
        <Sidebar width='100%'>
        <Menu>
          <SubMenu label="Group 1">
            <MenuItem> Dep </MenuItem>
            <MenuItem> Dep </MenuItem>
          </SubMenu>
          <MenuItem> Group 2 </MenuItem>
          <MenuItem> Group 3 </MenuItem>
        </Menu>

      </Sidebar>

      </div>
    );
  }
  