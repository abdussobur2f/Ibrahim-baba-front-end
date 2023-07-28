import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc'
import axios from 'axios'
import '../../styles/Category/Category.scss'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

// import { AiOutlineShoppingCart } from 'react-icons/ai'
// import { VscHeart } from 'react-icons/vsc'
// import {BsEye} from 'react-icons/bs'




const Category = () => {


  const [product, setProduct] = useState([])
 


  const getData = async () => {


    await axios.get("https://fakestoreapi.com/products")

      .then((res) => {

        setProduct(res.data)

      })
      .catch((erorr) => {
        console.log(erorr)
      })
  }

  useEffect(() => {


    getData()
  }, [])

  //  slick slider

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
   
    autoplay:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]


  };
 

  return (
    <>
      <section className="Category_view mb-3 overflow-hidden">
        <div className="  ">

<Slider {...settings }>
          <div className="banner_item px-2  ">
            <img src="https://img.freepik.com/premium-psd/online-shopping-sale-icon-dark-background-3d-render-concept-marketing-banner-design_492780-3254.jpg?w=740" alt="" className="img-fluid" />
          </div>

          <div className="banner_item px-2  ">
            <img src=" https://img.freepik.com/free-psd/sales-template-design-banner_23-2149174599.jpg?w=740&t=st=1688872839~exp=1688873439~hmac=abb59e1f668ec74bcfc599e3dd1f91abe73394805f1eff50921b8fa225a00a13" alt="" className="img-fluid" />
          </div>

          <div className="banner_item px-2">
            <img src="https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148971178.jpg?w=740&t=st=1688872904~exp=1688873504~hmac=9662c62a72731f6eddfafdc98f63c68fdda16dbf00a902bc1cdd48fed8589da0 " alt="" className="img-fluid" />
          </div>
          
          <div className="banner_item px-2">
            <img src="https://img.freepik.com/free-vector/online-shopping-landing-page_23-2148787137.jpg?w=740&t=st=1688872950~exp=1688873550~hmac=22e325ff1ddd71b29831a9c0b18a91beb62556fbed753fef2562bae39923b338" alt="" className="img-fluid" />
          </div>

          <div className="banner_item px-2">
            <img src="https://img.freepik.com/free-psd/online-shopping-banner_23-2148567670.jpg?w=740&t=st=1688872933~exp=1688873533~hmac=ff0e7882a36bd0e7eb2d1cf1a4c3cabe7281323e25091c56783ca8f38a181bab " alt="" className="img-fluid" />
          </div>
          <div className="banner_item px-2">
            <img src="https://img.freepik.com/free-psd/online-shopping-banner_23-2148567670.jpg?w=740&t=st=1688872933~exp=1688873533~hmac=ff0e7882a36bd0e7eb2d1cf1a4c3cabe7281323e25091c56783ca8f38a181bab " alt="" className="img-fluid" />
          </div>
          <div className="banner_item px-2">
            <img src="https://img.freepik.com/free-psd/online-shopping-banner_23-2148567670.jpg?w=740&t=st=1688872933~exp=1688873533~hmac=ff0e7882a36bd0e7eb2d1cf1a4c3cabe7281323e25091c56783ca8f38a181bab " alt="" className="img-fluid" />
          </div>
          </Slider>

        </div>

      </section>


      <section className="category__product overflow-hidden">
        <div className="category_container">
          <div className="flas_menu ">
            <ul className='  '>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><MdKeyboardArrowRight /></li>
              <li><NavLink to="/flash"> Category</NavLink></li>
              <li><MdKeyboardArrowRight /></li>
              <li><NavLink>Pottato</NavLink></li>
            </ul>
          </div>




          <div className="row px-3">


            <div className="category_count py-2">
              <span className='fs-3 fw-bold'>Category</span><span className= 'fs-3 ms-1 fw-bold'>({product.length} )</span>
            </div>
            <hr />

            {

              product.slice().map((item, index) => {
                return (
                  <div className="col-lg-2 col-md-4 px-2 col-6 ">

                    <div className="card  rounded-0 mb-4 " key={index}>
                      <img className="card-img-top rounded-0" src={item.image} alt="Card image cap" />
                      <div className="card-body ">
                        <p className="card-text mb-0 text-center mt-2">   {item.category}</p>
                      </div>

                      <div className="view_btn">
                        <NavLink to="/categoryAll">  view </NavLink>
                      </div>


                    </div>
                  </div>

                )
              })
            }
            {

              product.slice().map((item, index) => {
                return (
                  <div className="col-lg-2 col-md-4 col-sm-6 px-2 ">

                    <div className="card  rounded-0 mb-4 " key={index}>
                      <img className="card-img-top rounded-0" src={item.image} alt="Card image cap" />
                      <div className="card-body ">
                        <p className="card-text mb-0 text-center mt-2">   {item.category}</p>
                      </div>

                      <div className="view_btn">
                        <NavLink to="/categoryAll"> view </NavLink>
                      </div>


                    </div>
                  </div>

                )
              })
            }

          </div>


        </div>
      </section>

    </>
  )
}

export default Category