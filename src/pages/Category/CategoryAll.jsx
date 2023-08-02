import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { VscHeart } from 'react-icons/vsc'
import {MdKeyboardArrowRight } from 'react-icons/md'
import '../../styles/Category/CategoryAll.scss'
import { FaHeart } from 'react-icons/fa'
import ModalContent from '../../component/ProductDisplay/ModalContent'
 
const CategoryAll = () => {

const [category, SetCategory] = useState([])


const [love, setLove] = useState(false)

const [modalShow, setModalShow] = React.useState(false);


const show = () => {
  setLove(!love)

}




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
      <img  className="rounded-0 " src={item.urls.regular} alt="no" />
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
        category.slice().map((item) => {
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
        category.slice().reverse().map((item) => {
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

export default CategoryAll