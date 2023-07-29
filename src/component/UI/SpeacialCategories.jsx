import React, { useEffect, useState } from 'react'
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import Slider from 'react-slick';
import './UI.scss'
import axios from 'axios';
import { MdArrowForwardIos } from 'react-icons/md'
import { NavLink } from 'react-router-dom';


const SpeacialCategories = () => {

  const [slideData, setSliderData] = useState([])


  const getData = () => {
    axios.get("https://api.unsplash.com/search/photos/?photos?page=2&query=vegetable&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk")
      .then((res) => {
        // console.log(res.data.products)
        setSliderData(res.data.results)
      })
      .catch((erorr) => {
        console.log(erorr)
      })
  }

  useEffect(() => {
    getData()
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
    dots: false,
    infinite: true,

    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]


  };
  return (

    <>


      <div className="speacial_products px-0 overflow-hidden px-2 ">
        <div className="row px-3">
          <div className="  top_heading d-flex justify-content-between align-items-center  mb-3 ">
            <div className="heading  col-lg-4 col-6">
              <h5 className='sub-heading'>Special Offer</h5>
            </div>


            <div className="viwe  col-lg-4 col-6">
              <NavLink className='' to="/Offer"> view <span className='d-none d-md-inline-block d-lg-inline-block'><MdArrowForwardIos /></span></NavLink>
            </div>

          </div>
        </div>


        <Slider {...settings}>

          {
            slideData.slice(0, 5).map((data, index) => {
              return (
                <div className="special_item" key={index}>

                  <div className="card rounded-0 item_list">
                    <div className='top_imges'>
                      <img className="card-img-top img-fluid rounded-0 " src={data.urls.small} alt="Card image cap" />
                    </div>
                    <div className="card-body px-1">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img className="card-img-top img-fluid rounded-0" src={data.urls.small} alt="Card image cap" />
                        </div>
                        <div className="col-6 ps-0">
                          <p className="text  ">{data.alt_description.slice(0, 30)}.Lorem ipsum dolor
                            .</p>
                          <p >2 pis</p>

                          <h4 className='money_offer me-3 '>$120 <span className="text-decoration-line-through">  $200</span></h4>
                        </div>
                      </div>



                      <div className="my mt-4">
                        <a href="#" className="my-btn-black w-100 d-block text-center">Add To Cart</a>
                      </div>
                    </div>
                  </div>

                </div>
              )



            })
          }








        </Slider>

      </div>





    </>
  )
}

export default SpeacialCategories