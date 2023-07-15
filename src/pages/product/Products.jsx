import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.scss'
// import { BsEye } from 'react-icons/bs'
// import { VscHeart, VscSync } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md'
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


    
 


  return (
    <>

 




      <section className="product bg-white">
        
      <div className="row heading_top_flas  justify-content-between align-items-center">
              <div className="heading  col-lg-4 col-4 ">
                <h5 className='sub-heading'>All Categories</h5>
              </div>
              {/* <div className="counting text-center col-lg-4 col-4">
                <h6>End In : <span>0{hour}</span> <span>{minute}</span> <span>{second}</span></h6>
              </div> */}
              <div className="viwe  col-lg-4 col-4">
                <NavLink to="/category" className=''> view <span><MdArrowForwardIos /></span></NavLink>
              </div>
            </div>

<div className="row row-cols-2 row-cols-lg-6 row-cols-md-3 py-3">
    {
      
        product.slice().map((elm,index)=>{
            return(
              
                <div className="card border-0 rounded-0 py-2 " key={index}>
                  <img className="card-img-top rounded-0" src={elm.urls.thumb}alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text mb-0">   {elm.alt_description.slice(0,20)}</p>
                  </div>
              


              {/* <div className="card__icon">
               <span> <BsEye/></span>
              <span> <VscHeart/></span>
               <span><VscSync/></span>
              </div>

              <div className="cart__add">
                <div className="btn btn-primary btn-outline">Add To Cart</div>
              </div> */}
                        </div>
            )
        })
    }
    {
      
        product.slice(6,8).map((elm,index)=>{
            return(
              
                <div className="card border-0 rounded-0 py-2 " key={index}>
                  <img className="card-img-top rounded-0" src={elm.urls.regular}alt="Card image cap"/>
                  <div className="card-body ">
                    <p className="card-text mb-0">   {elm.alt_description.slice(0,20)}</p>
                  </div>
              


              {/* <div className="card__icon">
               <span> <BsEye/></span>
              <span> <VscHeart/></span>
               <span><VscSync/></span>
              </div>

              <div className="cart__add">
                <div className="btn btn-primary btn-outline">Add To Cart</div>
              </div> */}
                        </div>
            )
        })
    }
</div>
 

      </section>

    </>
  )
}

export default Products
