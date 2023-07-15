import React,{useEffect,useState} from 'react'
import banner1 from '../../images/black-friday-sale-banner-retail-shopping-promotion-with-black-gift-box-retro-light-sign-black-friday-banner-design-big-sale-special-offer-year_139523-468.avif'
import banner2 from '../../images/shopping-cart-moves-speed-light-backdrop-with-balloons-gift-boxes-all-live-futuristic-atmosphere-3d-render_172660-11.avif'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'
import {BsEye} from 'react-icons/bs'
import axios from 'axios'
import '../../styles/LatestProduct/LatestProduct.scss'
const LatestProduct = () => {
const [product,setProduct] = useState([])

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

      <section className="Latest_Product px-3">
        <div className="Latest_wrraper">

          {/*  hero item */}

          <div className="latest_Products_hero">
<div className="row">
  <div className="col-6 px-2">
    <img className='' src={banner1} alt="" />
  </div>
  <div className="col-6 px-2">
  <img src={banner2} alt="" />

  </div>
</div>
</div>


{/* menu list */}


<div className="flas_menu  py-3">
  <ul className='  '>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><MdKeyboardArrowRight/></li>
    <li><NavLink to="/flash"> Latest Product</NavLink></li>

  </ul>

 
                  
</div>

{/* product  list */}

{/* flas product */}
<div className="row row-cols-lg-5 row-cols-md-3 product_list    ">

 
                {
                  product.slice().map((item) => {
                    return (
                      <div className="col-6  px-2 mb-5">
                        <NavLink to="/flash"  >
                          <div className="card border-1  mb-4 rounded-0" key={item.id}>
                            <img src={item.urls.regular} alt="" className="card-img-top img-fluid rounded-0" />

                            <div className="card-body ">
                              <p className='card-title'>{item.alt_description.slice(0,25)}..</p>
                              <div className="card-text">

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
                       <span>< BsEye/></span>
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
      </section>
    </>
  )
}

export default LatestProduct