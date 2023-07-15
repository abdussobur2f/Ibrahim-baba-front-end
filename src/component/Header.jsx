import React, { useState } from 'react'
import './Header.scss'
import logo from '../images/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771-removebg-preview (1).png'
import logo1 from '../images/photo_2023-07-04_06-57-34.jpg'
import profile from '../images/3135715.png'
import { VscBell, VscHeart, VscSearch } from 'react-icons/vsc'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const Header = () => {

    const [show,setShow] = useState(false)

    const topShow = () =>{
        if(window.scrollY > 20){
setShow(true)
        }else{
            setShow(false)
        }
    }







window.addEventListener("scroll" , topShow)

    return (

        <>
            <header className={show ? "sticky header" : "header"}>
                <div className="container-fluid px-4">




                    <div className="wrapper">
                        <div className="row gap-5 gap-sm-0 align-items-center position-relative ">

{/* 2 */}


                            <div className="col-lg-2 col-md-3 col-4  px-md-2  ">
                                <div className="logo   d-flex align-items-center justify-content-center gap-1">
                                <img src={logo1} alt="" className="img-fluid logo_chal_dal" />
                                   <h5 className=' mt-1'> IBRAHIMBABA </h5>
                                </div>
                            </div>

{/* 2 */}
                            <div className="col-lg-2  col-md-3 col-3 ">
                                <div className="img_head ">
                                    <img src={logo} alt="" className="img-fluid " />
                                </div>
                            </div>



                            {/* 4  */}


                            <div className="  ms-auto col-lg-5 col-md-12  order-lg-0 order-md-5 input_item pt-md-2 order-5">

                                <div className="input-group from-outline ">
                                    <input type="text" className="form-control   border-1 " placeholder="Enter Your Keyword" />

                                    <span className="input-group-text   border-0  px-4" id="basic-addon2"><BsSearch className='me-2'/> Search </span>

                                </div>
                            </div>



{/* 2 */}
                            <div className="nav_icon  col-lg-1 col-md-2 col-2 ms-auto  justify-content-md-end justify-align-content-lg-around  gap-md-4 justify-content-between ">
                                <div className="shop_icon">
                                    <div className="countNm">
                                        <span>0</span>
                                    </div>
                                    <span> <NavLink to="/cartList"><AiOutlineShoppingCart /></NavLink></span>
                                </div>
                                {/* <div className="notification_icon">
                                            <div className="countNm">
                                                <span>2</span>
                                            </div>
                                            <span><VscBell /></span>
                                        </div> */}
                                <div className="heart_icon ">
                                    <div className="countNm">
                                        <span>2</span>
                                    </div>
                                    <span> <NavLink to="/whislist"><VscHeart /></NavLink></span>
                                </div>

                                </div>

{/* 2 */}

                                <div className="profile col-lg-1 col-md-2 px-lg-0 px-md-2 col-2">
                                <div className="profile_item ">
                                    <img src={profile} alt="" className="img-fluid" />
                                    <h6 className='text-capitalize'>My Account</h6>
                                </div>
                            </div>
                         







                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header