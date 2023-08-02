import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { VscChevronRight,VscChevronLeft } from 'react-icons/vsc'
import axios from 'axios'
import '../../styles/FlasDeals.scss/Flash.scss'
import { NavLink } from 'react-router-dom'
import {MdKeyboardArrowRight } from 'react-icons/md'
import { VscHeart } from 'react-icons/vsc'
 
import { FaHeart } from 'react-icons/fa'
import ModalContent from '../../component/ProductDisplay/ModalContent'

const Flash = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0);

  const [product,setProduct] =useState([])

  const [love, setLove] = useState(false)

  const [modalShow, setModalShow] = React.useState(false);


  const show = () => {
    setLove(!love)

  }

 

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };


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
  
  const getData = async () => {


    await axios.get("https://api.unsplash.com/search/photos/?photos?page=2&query=vegetable&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk")
      .then((res) => {
        console.log(res.data.results)
        setProduct(res.data.results)

      })
      .catch((erorr) => {
        console.log(erorr)
      })
  }

  useEffect(() => {


    getData()
  }, [])


  return (
    <>
    <section className="flas_deals_all mb-3">
      
    <Slider {...settings}>
               {
                product.slice(7,10).map((item)=>{
                return(


                  <div>
                  <div className="slider_item">
                    <div className="card h-100 border-0 rounded-0 p-0 m-0">
                      <img className="rounded-0" src={item.urls.regular} alt="Card" />
                      <div className="card-img-overlay text-center">
                        <h5 className="card-title text-white ">Flas Deals Just For You</h5>
                        <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="my-btn">Shop now</button>
                      </div>
                    </div>
                  </div>
                </div>

                
                )
                })
               }


              </Slider>
      
      
          </section>
{/* flash menu bar */}

          <section className='Flas__view_page  '>
<div className="flash_container px-0">


<div className="flas_menu  ">
  <ul className='   '>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><MdKeyboardArrowRight/></li>
    <li><NavLink to="/flash">Flash Deals</NavLink></li>

  </ul>

  <div className="counting d-flex align-items-center justify-content-between   mt-2 top_heading px-2 ">
    <h5 className="fw-bold">Flas Deals</h5>
                    <h6 className='sub-headin ending_flash_deals mb-0'>Ends In : <span>0{hour}</span> : <span>{minute}</span> : <span>{second}</span>
                    </h6>
                   
                    <p className='sub-heading mb-0   d-block text-center '>00:00 Tomorrow</p>
                  </div>
                  <hr />
</div>



{/* flas product */}
<div className="row row-cols-lg-5 row-cols-md-3 flash_view_item px-3   ">

 
                {
                  product.slice().map((item) => {
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
                {
                  product.slice().reverse().map((item) => {
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

export default Flash