import React from 'react'
import SubMenu from './SubMenu';
 import items from'../SideBar/SideBarData/sidebar.json'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import { FiSearch } from "react-icons/fi/";
import './Sidebar.scss'

const SideBar = () => {
  
 


  return (
    <>
      


<Sidebar className='sidebar '>
<div>
  <Menu>



    <MenuItem className='py-3 mb-2'>
      <div className="input-group from-outline ">
        <input type="text" className="form-control rounded-0  border-1" placeholder=" Search  " aria-label="Enter Your Keyword" />

        <span className="input-group-text  rounded-0  " id="basic-addon2"><FiSearch /></span>

      </div>


    </MenuItem>


  </Menu>




  <div className="menu">
 
          { items.map((item, index) => <SubMenu key={index} item={item} />) }
       


  </div>



</div>
</Sidebar>


    </>
  )
}

export default SideBar