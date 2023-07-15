import React, { useEffect, useState } from 'react'
 import banner1 from '../../images/trix-dishwashing-liquid-refill-double-pack-500-ml.webp'
  
 import {BsEye} from 'react-icons/bs'
 import { NavLink } from 'react-router-dom';
 import { MdKeyboardArrowRight } from 'react-icons/md';
import axios from 'axios';
 
 
 import '../../styles/SpecialOffer/SpecialOffer.scss'
import { VscChevronRight } from 'react-icons/vsc';

const SpecialOffer = () => {

  const [slideData,setSliderData] = useState([])


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



  
  return (
    
    <>
    <section className="hero_offer">
 
 
          <div className="hero_item">
                    <div className="card h-100 border-0 rounded-0 p-0 m-0">
                      <img className="card-img rounded-0" src="https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?w=740&t=st=1688914856~exp=1688915456~hmac=c0461a6e11f0f250bafa7f8057fea0f7f6fb947c78a1070f60cb64c2f628f0f2" alt="Card image" />
                      <div className="card-img-overlay text-center">
                        <h5 className="card-title text-white ">Special Deals For You</h5>
                        <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className="my-btn">Shop now</button>
                      </div>
                    </div>
                  </div>
   

    </section>

    
      <section className="speacial_products_view_page  overflow-hidden  px-3 ">
      
<div className="flas_menu pb-2">
  <ul className='  '>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><MdKeyboardArrowRight/></li>
    <li><NavLink to="/flash">Special Offer</NavLink></li>

  </ul>
 
 
</div>
     



<div className="special_product_list  ">

<div className="row ">
{
  slideData.slice(0).map((item)=>{
    return(
      <div className="col-lg-4 col-md-2 mb-3 px-2">
        <div className="Item_offfer">


      <div className="row p-2">
        <div className="col-8  pe-0">
  <div className="top h-100 ">
  <img src={item.urls.small} alt="" className="img-fluid  h-100
  " />
  </div>
        </div>
        <div className="col-4 ">
  <div className="bottom">
  <div className="content text-center d-flex flex-column py-2">
  <img src={banner1} alt="" className="img-fluid  " />
  

    
  <p className='text-center normal-font'>Lorem ipsum dolor sit amet.</p>
  <span className='normal-font'>3kg</span>
  <p ><span className='fixed_money'>$383</span> <span className='text-decoration-line-through mines_money'>360</span></p>
<div className="cart_btn ">
<h3 className='mb-0 '>Details<VscChevronRight className='ms-1 fs-6'/> </h3>
 
</div>

  </div>
  <button className='my-btn-black d-block w-100'>Add To Bag</button>
  </div>
  
        </div>
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

export default SpecialOffer
 