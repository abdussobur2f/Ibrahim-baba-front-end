import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'
import {BsEye} from 'react-icons/bs'
import {MdKeyboardArrowRight } from 'react-icons/md'
import '../../styles/Category/CategoryAll.scss'
 
const CategoryAll = () => {

const [category, SetCategory] = useState([])

const fetchData = async () =>{
   await axios.get("https://api.unsplash.com/search/photos/?photos?page=4&query=vegetable&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk")

    .then((res)=>{
       SetCategory(res.data.results)
    })
    .catch((e)=>{
      console.log(e)
    })
}

useEffect(()=>{
fetchData()
},[])

  return (
    <>

<section className="all_view_category">
  <div className="category_all_container">





<div className="banner_category">
 {
  category.slice(7,8).map((item)=>{
    return(
      <div className="card h-100 border-0 rounded-0 p-0 m-0">
      <img className="card-img rounded-0" src={item.urls.regular} alt="Card image" />
      <div className="card-img-overlay text-center">
        <h5 className="card-title text-white ">Buy Now </h5>
        <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="my-btn">Shop now</button>
      </div>
    </div>
    )
  })
 }
</div>


<div className="flas_menu pt-2">
  <ul className='  '>
    <li><NavLink to="/category">Category</NavLink></li>
    <li><MdKeyboardArrowRight/></li>
    <li><NavLink to="/flash">All Product</NavLink></li>
    <li><MdKeyboardArrowRight/></li>
    <li><NavLink>Apple</NavLink></li>
  </ul>
</div>

<div className="view_products">
  
<div className="row row-cols-lg-5 row-cols-md-3 px-3">


{
  category.map((item)=>{

    return(
      
<div className="col-6 mt-3 px-2 mb-5">
                        <NavLink to="/home"  >
                          <div className="card border-1  rounded-0" key={item.id}>
                            <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                            <div className="card-body">
                              <p className='card-title'>{item.alt_description.slice(0,20)}..</p>
                              <div className="card-text ">

                                <div className="rating d-flex align-items-baseline justify-content-between">
                                  <h5 className='lh-2'>${item.user.total_likes.toString().slice(0,2)}</h5>

                                </div>
                                <div className="price_product d-flex align-items-center gap-1 ">
                                  <h4 className='mb-0 '>${item.likes}</h4>
                                  <span> -{item.user.total_photos}%</span>
                                </div>
                              </div>
                              <div className="hover_card d-flex align-items-center  justify-content-center gap-4 mb-2 ">
                                <a >  <span><AiOutlineShoppingCart /></span></a>
                                {/* <span><VscSync /></span> */}
                                <span><VscHeart /></span>
                                <span><BsEye/></span>
                              </div>
                              
                            </div>
                           

            

              <div className="cart__add  pt-1 w-100 text-center">
                <div className="btn_Cart_add d-block w-100 ">Add To Cart</div>
              </div>


                          </div>
                        </NavLink>
                      </div>
    )
  })
}
{
  category.map((item)=>{

    return(
      
<div className="col-6 mt-3 px-2 mb-5">
                        <NavLink to="/home"  >
                          <div className="card border-1  rounded-0" key={item.id}>
                            <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                            <div className="card-body">
                              <p className='card-title'>{item.alt_description.slice(0,20)}..</p>
                              <div className="card-text ">

                                <div className="rating d-flex align-items-baseline justify-content-between">
                                  <h5 className='lh-2'>${item.user.total_likes.toString().slice(0,2)}</h5>

                                </div>
                                <div className="price_product d-flex align-items-center gap-1 ">
                                  <h4 className='mb-0 '>${item.likes}</h4>
                                  <span> -{item.user.total_photos}%</span>
                                </div>
                              </div>
                              <div className="hover_card d-flex align-items-center  justify-content-center gap-4 mb-2 ">
                                <a >  <span><AiOutlineShoppingCart /></span></a>
                                {/* <span><VscSync /></span> */}
                                <span><VscHeart /></span>
                                <span><BsEye/></span>
                              </div>
                              
                            </div>
                           

            

              <div className="cart__add  pt-1 w-100 text-center">
                <div className="btn_Cart_add d-block w-100 ">Add To Cart</div>
              </div>


                          </div>
                        </NavLink>
                      </div>
    )
  })
}
</div>
</div>




  </div>
</section>



      
    </>
  )
}

export default CategoryAll