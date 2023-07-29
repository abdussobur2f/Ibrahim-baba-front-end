
//  note this is home page create name mistake that's page name home Route sorry 

import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import '../../styles/Home.scss'
import { VscHeart } from "react-icons/vsc";
import { MdArrowForwardIos } from 'react-icons/md'
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom'
import Products from '../product/Products';
import SpeacialCategories from '../../component/UI/SpeacialCategories';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa'
import '../../styles/Responsive/Responsive.scss'

// poppup

import ModalContent from '../../component/ProductDisplay/ModalContent';

const HomeRoute = () => {

  const [product, setProduct] = useState([])
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0);

  const [update, setUpdate] = useState(0)
  const [love, setLove] = useState(false)

  const [modalShow, setModalShow] = React.useState(false);


  const showMore = () => {

    setUpdate((more) => more + 5)

  }


  useEffect(() => {

    const update = () => {

      const date = new Date();
      const hour = date.getHours();
      setHour(hour);
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }



    const interval = setInterval(() => {
      update();
    }, 3000);

    return () => clearInterval(interval);



  }, [])

  const SampleNextArrow = ({ onClick }) => {

    return (
      <div className='arrow arrow_right' onClick={onClick} >

        <VscChevronRight />
      </div>
    );
  }

  const SamplePrevArrow = ({ onClick }) => {

    return (
      <div className='arrow ym-btn arrow_prev' onClick={onClick}>
        <VscChevronLeft />
      </div>
    );
  }

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,

  };


  const getData = async () => {


    await axios.get("https://api.unsplash.com/search/photos/?photos?page=2&query=vegetable&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk")
      .then((res) => {
        setProduct(res.data.results)

      })
      .catch((erorr) => {
        console.log(erorr)
      })
  }

  useEffect(() => {
    getData()
  }, [])



  const show = () => {
    setLove(!love)

  }
 
  // popup
 
  return (
    <>
      <section className="hero_section mb-3 p-0 w-100">
        <div className="hero_section">


          <Slider {...settings}>
            {
              product.slice(7, 10).map((item) => {
                return (


                  <div>
                    <div className="slider_item">
                      <div className="card h-100 border-0 rounded-0 p-0 m-0">
                        <img className="card-img rounded-0" src={item.urls.regular} alt="Card image" />
                        <div className="card-img-overlay text-center">
                          <h5 className="card-title text-white ">Find You Product And Buy Now</h5>
                          <p className="card-text text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non aliquam placeat.</p>
                          <button className="my-btn">Shop now</button>
                        </div>
                      </div>
                    </div>
                  </div>


                )
              })
            }


          </Slider>
        </div>

      </section>


      <section className='flasDeails p-3'>
        <div className="row px-2">
          <div className="top_heading  flex-wrap d-flex   justify-content-between align-items-center">
            <div className="heading  col-lg-4 col-6 ">
              <h5 className='sub-heading'>Flash Deals</h5>
            </div>
            <div className="counting  text-center col-lg-4 col-12 order-md-0 order-lg-0 order-3 order-lg-0 ">
              <h6 className='m-auto  mt-3 mt-lg-0 mt-md-0'>End In : <span>0{hour}</span> <span>{minute}</span> <span>{second}</span></h6>
            </div>
            <div className="viwe  col-lg-4 col-6  ">
              <NavLink to="/flash" className=''> view <span className='d-none d-md-inline-block d-lg-inline-block'><MdArrowForwardIos /></span></NavLink>
            </div>
          </div>
        </div>


        <div className="row row-cols-lg-5 row-cols-md-3 product_list  ">


          {
            product.slice(0, 5).map((item) => {
              return (
                <div className="col-6 mt-3 mb-5 px-2">

                  <div className="card border-1  rounded-0" key={item.id}>
                    <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                    {/*  body contenrt start */}
                    <div className="card-body ">
                      <p className='card-title'>{item.alt_description.slice(0, 15)}....</p>
                      <div className="card-text">

                        <div className="rating d-flex align-items-center justify-content-between">
                          <h5 className='lh-2'>${item.user.total_likes.toString().slice(0, 2)}</h5>
                          <h3> Point<span className='normal-font'>: 3.500</span></h3>
                        </div>
                        <div className="price_product d-flex align-items-center gap-1 ">
                          <h4 className='mb-0 '>${item.likes}</h4>
                          <span> -{item.user.total_photos}%</span>
                        </div>
                      </div>
                      <div className="hover_card d-flex align-items-center  justify-content-center gap-4 mb-2 ">
                        <button onClick={() => setModalShow(true)}>Details</button>




                      </div>
                    </div>
                    {/*  body contenrt end */}


                    <div className="cart__add  w-100 text-center">
                      <div className="btn_Cart_add d-block w-100 ">Add To Cart</div>
                    </div>

                    <div className="whislist_icon" onClick={show}>



                      {
                        love ? <FaHeart className='text-danger' /> : <VscHeart />
                      }

                    </div>


                  </div>

                </div>
              )
            })
          }



        </div>





      </section>



      <section className='Categories'>
        <Products />
      </section>


      <section className="latest_products p-3">
        <div className="row px-2">
          <div className="top_heading  d-flex   justify-content-between align-items-center">
            <div className="heading  col-lg-4 col-6">
              <h5 className='sub-heading'> Lates Products</h5>
            </div>

            <div className="viwe  col-lg-4 col-6">
              <NavLink to="/latestProduct" className=''> view <span className='d-none d-md-inline-block d-lg-inline-block'><MdArrowForwardIos /></span></NavLink>
            </div>
          </div>
        </div>


        <div className="row row-cols-lg-5 row-cols-md-3 product_list    ">


          {
            product.slice().map((item) => {
              return (
                <div className="col-6 mt-3 px-2 mb-5">

                  <div className="card border-1  rounded-0" key={item.id}>
                    <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                    {/*  body contenrt start */}
                    <div className="card-body ">
                      <p className='card-title'>{item.alt_description.slice(0, 15)} Lorem ipsum dolor....</p>
                      <div className="card-text">

                        <div className="rating d-flex align-items-center justify-content-between">
                          <h5 className='lh-2'>${item.user.total_likes.toString().slice(0, 2)}</h5>
                          <h3> Point<span className='normal-font'>: 3.500</span></h3>
                        </div>
                        <div className="price_product d-flex align-items-center gap-1 ">
                          <h4 className='mb-0 '>${item.likes}</h4>
                          <span> -{item.user.total_photos}%</span>
                        </div>
                      </div>
                      <div className="hover_card d-flex align-items-center  justify-content-center gap-4 mb-2 ">

                        <button onClick={() => setModalShow(true)}>deatails</button>

                      </div>
                    </div>
                    {/*  body contenrt end */}


                    <div className="cart__add  w-100 text-center">
                      <div className="btn_Cart_add d-block w-100 ">Add To Cart</div>
                    </div>

                    <div className="whislist_icon" onClick={show}>



                      {
                        love ? <FaHeart className='text-danger' /> : <VscHeart />
                      }

                    </div>


                  </div>

                </div>
              )
            })
          }



        </div>
      </section>

      <section className="speaial py-2">
        <SpeacialCategories />
      </section>

      <section className="just_for__you p-3">
        <div className="row px-2">
          <div className="top_heading  d-flex   justify-content-between align-items-center">
            <div className="heading  col-lg-4 col-4 ">
              <h5 className='sub-heading'>Just For You</h5>
            </div>

            <div className="viwe  col-lg-4 col-4">
              <NavLink to="/flash" className=''> view <span className='d-none d-md-inline-block d-lg-inline-block'><MdArrowForwardIos /></span></NavLink>
            </div>
          </div>
        </div>


        <div className="row row-cols-lg-5 row-cols-md-3 product_list">


          {
            product.slice().map((item) => {
              return (
                <div className="col-6 mt-3 px-2 mb-5">

                  <div className="card border-1  rounded-0" key={item.id}>
                    <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                    {/*  body contenrt start */}
                    <div className="card-body ">
                      <p className='card-title'>{item.alt_description.slice(0, 15)}....</p>
                      <div className="card-text">

                        <div className="rating d-flex align-items-center justify-content-between">
                          <h5 className='lh-2'>${item.user.total_likes.toString().slice(0, 2)}</h5>
                          <h3> Point<span className='normal-font'>: 3.500</span></h3>
                        </div>
                        <div className="price_product d-flex align-items-center gap-1 ">
                          <h4 className='mb-0 '>${item.likes}</h4>
                          <span> -{item.user.total_photos}%</span>
                        </div>
                      </div>
                      <div className="hover_card d-flex align-items-center  justify-content-center gap-4 mb-2 ">

                        <button>deatails</button>

                      </div>
                    </div>
                    {/*  body contenrt end */}


                    <div className="cart__add  w-100 text-center">
                      <div className="btn_Cart_add d-block w-100 ">Add To Cart</div>
                    </div>

                    <div className="whislist_icon" onClick={show}>



                      {
                        love ? <FaHeart className='text-danger' /> : <VscHeart />
                      }

                    </div>


                  </div>

                </div>
              )
            })
          }



        </div>
        <div className="row row-cols-lg-5 row-cols-md-3 product_list    ">


          {
            product.slice(0, update).map((item) => {
              return (
                <div className="col-6 mt-3 px-2 mb-5">

                  <div className="card border-1  rounded-0" key={item.id}>
                    <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                    {/*  body contenrt start */}
                    <div className="card-body ">
                      <p className='card-title'>{item.alt_description.slice(0, 15)}....</p>
                      <div className="card-text">

                        <div className="rating d-flex align-items-center justify-content-between">
                          <h5 className='lh-2'>${item.user.total_likes.toString().slice(0, 2)}</h5>
                          <h3> Point<span className='normal-font'>: 3.500</span></h3>
                        </div>
                        <div className="price_product d-flex align-items-center gap-1 ">
                          <h4 className='mb-0 '>${item.likes}</h4>
                          <span> -{item.user.total_photos}%</span>
                        </div>
                      </div>
                      <div className="hover_card d-flex align-items-center  justify-content-center gap-4 mb-2 ">

                        <button>deatails</button>

                      </div>
                    </div>
                    {/*  body contenrt end */}


                    <div className="cart__add  w-100 text-center">
                      <div className="btn_Cart_add d-block w-100 ">Add To Cart</div>
                    </div>

                    <div className="whislist_icon" onClick={show}>



                      {
                        love ? <FaHeart className='text-danger' /> : <VscHeart />
                      }

                    </div>


                  </div>

                </div>
              )
            })
          }



        </div>

        <div className=" my-3 w-100  d-flex aling-items-center justify-content-center d-block">
          <button className="my-btn   " onClick={showMore}>{
            product.length === 0 ? "No More" : "Show More"
          }
          </button>
        </div>

      </section>


      <section className="popup">
        <div>

          <ModalContent
            show={modalShow}
            onHide={() => setModalShow(false)}
          /> </div>
      </section>




    </>

  )
}

export default HomeRoute;