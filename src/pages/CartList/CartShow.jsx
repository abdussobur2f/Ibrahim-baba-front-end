import React from 'react'
import '../../styles/Home.scss'
import { VscChromeClose, VscTrash } from 'react-icons/vsc'
 
import img3 from '../../images/trix-dishwashing-liquid-refill-double-pack-500-ml.webp'
import { BiPlus, BiMinus } from 'react-icons/bi'
import Modal from 'react-bootstrap/Modal';
 import { NavLink } from 'react-router-dom'

const CartShow = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="cart_container p-2">
          <div className="top_heading_cart">

            <h5 className="heading">Your Shopping Cart</h5>
            <span className=" close " onClick={props.onHide}> <VscChromeClose /></span>

          </div>

          <div className="cart_body mb-2">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-12">
                <div className="cart_images">
               <img src={img3} 
                 alt="" 
                  className="img-fluid"
              />
                </div>
              </div>
              <div className="col-lg-10 col-md-12">

                <div className="cart_desc">
                  <div>
                    <div className="title_cart mb-2">
                      <h4 className=''>Tomato </h4>
                      <p className=' p-0 m-0   '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur laudantium veniam dicta adipisci error veritatis ab aliquid    .</p>
                    </div>

                    <div className="cout_product ">
                      <div className="incrment_btn ">
                        <button className="m-0 "><BiPlus /></button>
                        <button className='mb-0'>8</button>
                        <button className="m-0 mines"><BiMinus /> </button>
                      </div>
                      <div className="point">
                        <h4>Point : <span>3.5098</span></h4>
                      </div>


                    </div>

                    <div className="price ">
                      <span>৳ 30.9</span>
                    </div>
                  </div>



                  <div className="delet_cart my-btn-black">
                    <span><VscTrash className=' fs-3' /></span>
                  </div>


                </div>

              </div>

            </div>
          </div>
          <div className="cart_body mb-2">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-12">
                <div className="cart_images">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-10 col-md-12">

                <div className="cart_desc">
                  <div>
                    <div className="title_cart mb-2">
                      <h4 className=''>Tomato </h4>
                      <p className=' p-0 m-0   '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur laudantium veniam dicta adipisci error veritatis ab aliquid    .</p>
                    </div>

                    <div className="cout_product ">
                      <div className="incrment_btn ">
                        <button className="m-0 "><BiPlus /></button>
                        <button className='mb-0'>8</button>
                        <button className="m-0 mines"><BiMinus /> </button>
                      </div>
                      <div className="point">
                        <h4>Point : <span>3.5098</span></h4>
                      </div>


                    </div>

                    <div className="price ">
                      <span>৳ 30.9</span>
                    </div>
                  </div>



                  <div className="delet_cart my-btn-black">
                    <span><VscTrash className=' fs-3' /></span>
                  </div>


                </div>

              </div>

            </div>
          </div>
       
          <div className="total_amount">
            <div className="subtotal">
              <h3 className=' '>subTotal </h3>
              <span>৳ 300</span>
            </div>
            <div className="total">

              <h3 className='total_heading'>total</h3>
              <span>৳ 2300</span>
            </div>
            <NavLink to="/cheakout" className="my-btn px-3">Cheakout</NavLink>

          </div>


          {/* body  end */}
        </div>

      </Modal>


    </>
  )
}

export default CartShow
