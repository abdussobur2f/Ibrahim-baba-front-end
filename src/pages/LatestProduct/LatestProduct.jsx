import React,{useEffect,useState} from 'react'
import banner1 from '../../images/black-friday-sale-banner-retail-shopping-promotion-with-black-gift-box-retro-light-sign-black-friday-banner-design-big-sale-special-offer-year_139523-468.avif'
import banner2 from '../../images/shopping-cart-moves-speed-light-backdrop-with-balloons-gift-boxes-all-live-futuristic-atmosphere-3d-render_172660-11.avif'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscHeart } from 'react-icons/vsc'
import axios from 'axios'
import '../../styles/LatestProduct/LatestProduct.scss'
import { FaHeart } from 'react-icons/fa'
import ModalContent from '../../component/ProductDisplay/ModalContent'
const LatestProduct = () => {
const [product,setProduct] = useState([])

 
const [love, setLove] = useState(false)

const [modalShow, setModalShow] = React.useState(false);


const show = () => {
  setLove(!love)

}


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

      <section className="Latest_Product w-100 overflow-hidden px-2">
        <div className="Latest_wrraper ">

          {/*  hero item */}

          <div className="latest_Products_hero w-100  h-100">
<div className="row px-0 ">
  <div className="col-lg-6 col-md-6 px-lg-2   mb-2 mb-lg-0 mb-md-0 ">
    <img className='img-fluid' src={banner1} alt="" />
  </div>
  <div className="col-lg-6 col-md-6 px-lg-2  ">
  <img className='img-fluid' src={banner2} alt="" />

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
<div className="row row-cols-lg-5 row-cols-md-3 product_list  ">

 
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

export default LatestProduct