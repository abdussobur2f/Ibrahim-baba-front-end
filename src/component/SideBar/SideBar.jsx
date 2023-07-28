import React from 'react'
import SubMenu from './SubMenu';
 import items from'../SideBar/SideBarData/sidebar.json'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import { FiSearch } from "react-icons/fi/";
import './Sidebar.scss'
import '../../styles/Responsive/Responsive.scss'
import logo1 from '../../images/photo_2023-07-04_06-57-34.jpg'
import { AiOutlineClose } from 'react-icons/ai';

const SideBar = ({showMenu,hideMenu}) => {

 


  return (
    <>
      


<div className={showMenu ? ' menu_show sidebar ' : 'sidebar'}>
<div>
  
 
<div className='d-flex justify-content-between align-items-center'>
<div className="logo   d-flex align-items-center justify-content-center gap-1 d-lg-none d-lg-block d-md-none">
                                    <img src={logo1} alt="" className="img-fluid logo_chal_dal" />
                                    <h5 className=' mt-1'> IBRAHIM.<span className='text-danger'>BABA</span> </h5>
                                </div>

                                <div className="close_menu d-block d-lg-none d-md-none">
                                <span onClick={hideMenu}>  <AiOutlineClose/></span>
                                </div>
</div>
 

    <div className='py-3 mb-2'>
      <div className="input-group from-outline ">
        <input type="text" className="form-control rounded-0  border-1" placeholder=" Search  " aria-label="Enter Your Keyword" />

        <span className="input-group-text  rounded-0  " id="basic-addon2"><FiSearch /></span>

      </div>


    </div>


 



  <div className="menu">
 
          { items.map((item, index) => <SubMenu key={index} item={item} />) }
       


  </div>



</div>
</div>


    </>
  )
}

export default SideBar