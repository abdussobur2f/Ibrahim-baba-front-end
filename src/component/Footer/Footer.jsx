import React from 'react'
import './Footer.scss'
import {BiCurrentLocation } from 'react-icons/bi'
import logo1 from '../../images/photo_2023-07-04_06-57-34.jpg'
import { VscCallOutgoing,VscMail } from 'react-icons/vsc'
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs'
import play from '../../images/lp_getandroidapp.webp'
import apple from '../../images/lp_getappleapp.webp'
const Footer = () => {
  return (
    <>
      <footer className='py-3 '>
        <div className="container-xxl">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-4  col-md-12 mb-lg-0 mb-md-4 pb-md-4">
                    <div className="logo  pe-3 d-flex align-items-center justify-content-center gap-1">
                                <img src={logo1} alt="" className="img-fluid logo_chal_dal" />
                                   <h5 className=' mt-1'> IBRAHIMBABA </h5>
                                </div>

                        <div className="app__Link d-flex align-items-center justify-content-center pt-2 ">
                            <div className="play_store">
                     <img src= {play} alt="" className="img-fluid" />
                            </div>
                            <div className="apple__Store ">
                     <img src= {apple} alt="" className="img-fluid" />
                             
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-6">
                                <ul className="p-0 m-0">
                                <li className="sub-heading">Company</li>
                                <li>our brance ofice</li>
                                <li>our Maches</li>
                                <li>job apply</li>
                                <li>wiiner list</li>
                                <li>about ust</li>
                                <li>wiiner list</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <ul className="p-0 m-0">
                                <li className="sub-heading">Company</li>
                                <li>faq</li>
                                <li> compalients</li>
                                <li><span><BsFacebook/></span>facebook page</li>
                                <li><span><BsFacebook/></span>facebook group</li>
                                <li><span><BsInstagram/></span>instagram</li>
                                <li><span><BsTwitter/></span>twitter</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <ul className="p-0 m-0">
                                <li className="sub-heading">Company</li>
                                <li>our brance ofice</li>
                                <li>our Maches</li>
                                <li>job apply</li>
                                <li>wiiner list</li>
                                
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <ul className="p-0 m-0">
                                <li className="sub-heading">contact us</li>
                                <li><span><VscMail/></span>our brance ofice</li>
                                <li><span><VscCallOutgoing/></span>our Maches</li>
                             
                                <li><span><BiCurrentLocation/></span>wiiner list</li>
                                
                                </ul>
                            </div>
                             
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
