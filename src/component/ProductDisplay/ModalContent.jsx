
import React, { useState, useEffect } from 'react'

import { BsStar, BsTwitter, BsFacebook, BsGoogle, BsPinterest, t } from 'react-icons/bs'
import '../../styles/ProductDispaly/ProductDisplay.scss'
import { VscHeart } from 'react-icons/vsc'
import { BiPlus, BiMinus } from 'react-icons/bi'



const ModalContent = () => {
  const [tab, SetTab] = useState("desc")





  //    const thisProduct = store.find(prod => prod.id === id)



 
  




  return (
    <div>
      <section className="products">
        <div className="container "  >
          {/* <div className="product_head_line">
                       
                    </div> */}

          <div className="row product_main_wrraper p-2">
            <div className="col-lg-6 col-md-12 ">
              <div className="row px-0 h-100 filter_item">

                <div className="col-12 ">
                  <img className='img-fluid h-100 img-thumbnail' src="https://img.freepik.com/premium-vector/online-shopping-with-mirror-reflection-3d-illustration_269039-740.jpg?w=740" alt="" />
                </div>
              </div>
            </div>

            {/* second colum */}
            <div className="col-lg-6 col-md-12 Products__details">

              <div className="products_head ">
                <h5 className="sub-heading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, exercitationem.</h5>

                <p className="price mb-0">$56</p>

                <h2 className='normal-font'>Point : <span>3.556</span></h2>
              </div>


              <div className="cout_product  ">
                <div className="incrment_btn d-flex align-productss-center justify-content-between">
                  <button className="mt-0 "><BiPlus /></button>
                  <button className='mb-0'>8</button>
                  <button className="m-0 mines"><BiMinus /> </button>
                </div>

                <button className="my-btn py-2 px-4 text-capitalize">add to cart</button>
              </div>


              <div className="wis_and_compare mt-4 d-flex gap-4">
                <div className="whis_list ">
                  <h4 className='sub-heading'><a href="" ><VscHeart className='fs-3 text-black me-1' /></a>WhisList</h4>
                </div>

              </div>


              <div className="description pt-2 my-2">
                <p className='normal-font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci distinctio quisquam reiciendis accusamus nam natus eligendi rem blanditiis in?</p>
              </div>


              {/* ioon
                                                     products */}


              <div className="ourFlowers d-flex gap-3 align-items-center">
                <div>
                  <span className='fw-bold follow'> follow Us: </span>

                </div>
                <div className="icon d-flex gap-2">
                  <span><BsTwitter className='bstwitter' /></span>
                  <span><BsFacebook className='bsfacebok' /></span>
                  <span ><BsGoogle className='bsgoogle' /></span>
                  <span ><BsPinterest className='bspinterest' /></span>

                </div>
              </div>
            </div>
          </div>


<div className="description__container p-2">



          <div className="filter_product_link  container    ">
            <div className="row">
              <div className="col-12">
                <div className="fillter_products d-flex    align-productss-start   gap-5 fs-4  py-3">
                  <a className='text-decoration-none' onClick={() => SetTab("desc")} >DESCRIPTION</a>
                  <a className=' text-decoration-none' onClick={() => SetTab("rev")} >REVIEWS (1)</a>
                  <a className=' text-decoration-none'    >SHARE NOW</a>
                 
                   

                  {/* <a >ABOUT BRANDS</a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row filter_products_product p-2" >
                            <div className="col-12">


                                {
                                    tab === "desc" ? <div className="desc">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maiores, adipisci quam expedita dolorum cum! Dolor voluptate et architecto dolore? Molestias a ullam nostrum autem sapiente impedit optio ipsam deserunt.</p>

                                        <p className="mt-3 mb-2 ">It features deep integration with WooCommerce core plus several of the most popular extensions:</p>

                                        <ul className=''>
                                            <li >Visual Composer</li>
                                            <li>Slider Revolution</li>
                                            <li> YITH WooCompare</li>
                                            <li>YITH WooCommerce Wishlist</li>
                                        </ul>

                                        <div className="">
                                            <h5 className='sub-heading fw-bold'>Trial & Dummy Data
                                            </h5>
                                        </div>

                                        <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut pariatur in hic nisi, corrupti cupiditate excepturi ab commodi quas explicabo!</p>
                                    </div> :
                                        <div className="review">
                                            <p className='my-2'>There are no reviews yet.</p>
                                            <p className="my-4">Be the first to review “Run Spelt Backwards Is Nur Shirt iness Casual Wool Trench Coats”
                                                Your email address will not be published. Required fields are marked *</p>


                                            {/*  star rating  */}
                                            <div className="rating">
                                                <h3 className='text-capitalize '>your rating</h3>
                                                <div className="star_rating d-flex align-productss-center ">
                                                    <ul className="rating_1 d-flex align-content-center justify-content-between gap-1">
                                                        <li><BsStar /></li>

                                                    </ul>
                                                    <ul className="rating_2 d-flex align-content-center justify-content-between gap-1">
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>

                                                    </ul>
                                                    <ul className="rating_3 d-flex align-content-center justify-content-between gap-1">
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>

                                                    </ul>
                                                    <ul className="rating_4 d-flex align-content-center justify-content-between gap-1">
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>

                                                    </ul>
                                                    <ul className="rating_5 d-flex align-content-center justify-content-between gap-1">
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>
                                                        <li><BsStar /></li>

                                                    </ul>
                                                </div>

                                            </div>







                                            <div className="review_box">
                                                <div class="group">
                                                    <label for="exampleFormControlTextarea1"> Description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                                </div>
                                                <div className="from-group">
                                                    <div className="row py-3">
                                                        <div className="form-group col-lg-6 col-md-6">
                                                            <label for="inputEmail4">Name</label>
                                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Name" />
                                                        </div>
                                                        <div className="from-group col-lg-6 col-md-6">
                                                            <label for="inputPassword4">Email</label>
                                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Email" />
                                                        </div>
                                                    </div>

                                                    <div className="submit_from">
                                                        <input type="checkbox" name="" id="" />


                                                        <p> Save my name, email, and website in this browser for the next time I comment.</p>

                                                        <button className="my-btn">submit</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                }







                                {/* about brands */}

                                {/* <div className= "about">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit velit nulla magni necessitatibus cum facilis repellendus alias, minus impedit dolorem. Dolorem, quidem officiis voluptate aut vero vitae rerum!</p>
                                    <div className="sub my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, dolor.</div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit velit nulla magni necessitatibus cum facilis repellendus alias, minus impedit dolorem. Dolorem, quidem officiis voluptate aut vero vitae rerum!</p>
                                    <div className="sub my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, dolor.</div>
                                </div> */}

                            </div>
                        </div>

                        </div>


        </div>
      </section>
    </div>
  )
}


export default ModalContent;