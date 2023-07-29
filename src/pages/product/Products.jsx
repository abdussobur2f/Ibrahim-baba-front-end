import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.scss'
// import { BsEye } from 'react-icons/bs'
// import { VscHeart, VscSync } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md'
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import Slider from 'react-slick';

const Products = () => {
    const [product,setProduct] = useState([])


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


    // slick slider

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
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
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

 




      <section className="product bg-white">
<div className='px-4'>
          
<div className="row top_heading mb-2  justify-content-between align-items-center">
              <div className="heading  col-lg-4 col-6 ">
                <h5 className='sub-heading'>All Categories</h5>
              </div>
        
              <div className="viwe  col-lg-4 col-6">
                <NavLink to="/category" className=''> view <span className='d-none d-md-inline-block d-lg-inline-block'><MdArrowForwardIos /></span></NavLink>
              </div>
            </div>
</div>

 <div className='category_item'>
  
<Slider {...settings}>
    {
       


        product.slice().map((elm,index)=>{

            return(
            
                <div className="card border-0 rounded-0 px-0  " key={index}>
                  <img className="card-img-top rounded-0" src={elm.urls.thumb}alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text mb-0">   {elm.alt_description.slice(0,20)}</p>
                  </div>

                        </div>
                    
            )
        })
      
       
    }
      </Slider>
    
 
 </div>

 

      </section>

    </>
  )
}

export default Products
