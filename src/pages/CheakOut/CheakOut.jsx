import React from 'react'
import '../../styles/CheakOut/CheakOut.scss'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'
import {  VscTrash } from 'react-icons/vsc'
import img3 from '../../images/trix-dishwashing-liquid-refill-double-pack-500-ml.webp'
import { BiPlus, BiMinus } from 'react-icons/bi'
const CheakOut = () => {
  return (
    <>

      <section className="cheakOut p-3">
        <div className="container__cheak">
          <h1 className='sub-heading mb-2'>Cheakout </h1>
          <div className="flas_menu  ">
            <ul className='   '>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><MdKeyboardArrowRight /></li>
              <li><NavLink to="/flash">Cheakout</NavLink></li>

            </ul>



          </div>

          <div className="row py-3">
            <div className="ol-lg-6 col-md-6 ">
              <div className="delivery_infomation">
                <h4 className='sub-heading information_heading'>Delivery Information</h4>

                <div className="row">
                  <div className="col-12">


                    <div className="contact_info">
                      <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" alt="" className="img-fluid" />

                      <div className="content_contact ">
                        <div className="midle">
                          <h3 className='sub-heading '>CONTACT INFO <span><AiOutlineCheck /></span></h3>
                          <p className='normal-font mb-0'>Abdus sobur +088 01645726503</p>
                        </div>
                        <div className="edit">
                          <button className="my-btn-black px-2 ">edit</button>
                        </div>
                      </div>
                    </div>
                    <div className="contact_info">
                      <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" alt="" className="img-fluid" />

                      <div className="content_contact ">
                        <div className="midle">
                          <h3 className='sub-heading '>SHIPPING ADDRESS <span><AiOutlineCheck /></span></h3>
                          <p className='normal-font mb-0'>St. Paul's Road, Norris, SD 57560, Dakota, USA</p>
                        </div>
                        <div className="edit">
                          <button className="my-btn-black px-2 ">edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="address_type  ">
                  <h4 className="sub-heading mb-1">Address type</h4>
                  <div className='address_type_content'>
                    <div className="home_delivery">


                      <input type="checkbox" name="" id="" />
                      <p><span className='fw-bold'>Home</span> (All Day Delivery)</p>
                    </div>
                    <div className="office">


                      <input type="checkbox" name="" id="" />
                      <p> <span className='fw-bold'>Office</span> (Delivery 9 AM - 5 PM)</p>
                    </div>

                  </div>
                </div>

          
                {/* payment mathood */}

                <div className="payment_methood">
                <h4 className="sub-heading mb-1">Payment Methood</h4>

                <div className="payment_container">
                <div className="online_payment">


<input type="checkbox" name="" id="" />
<p> Online Payment</p>
</div>
<div className="cash_on">


<input type="checkbox" name="" id="" />
<p>Cash On Delivery</p>
</div>
<div className="pos_delivery">


<input type="checkbox" name="" id="" />
<p> Pos Delivery</p>
</div>
                </div>
                </div>

                      {/* copun code  */}

                      <div className="copun   p-2">

<div className="c ">
  <input type="text" className='form-control' placeholder='Enter copun code' />
</div>
<div className="  ">
  <button className="ms-auto  ">Apply</button>
</div>
</div>

              </div>

            </div>
            <div className="col-lg-6 col-md-6  ">
      
      <div className="order_summery  ">
      <h4 className='sub-heading order_heading'>Order Summary</h4>

<div className="order_container">


 
<div className="cart_body mb-2 ">
<div className="row align-items-center">
<div className="col-lg-2 col-md-12">
  <div className="cart_images">
    <img src={img3} alt="" className="img-fluid" />
  </div>
</div>
<div className="col-lg-10 col-md-12">

  <div className="cart_desc ">
    <div>
      <div className="title_cart mb-2">
        <h4 className=''>Tomato </h4>
        <p className=' p-0 m-0   '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur laudantium veniam dicta     .</p>
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
<div className="cart_body mb-2 ">
<div className="row align-items-center">
<div className="col-lg-2 col-md-12">
  <div className="cart_images">
    <img src={img3} alt="" className="img-fluid" />
  </div>
</div>
<div className="col-lg-10 col-md-12">

  <div className="cart_desc ">
    <div>
      <div className="title_cart mb-2">
        <h4 className=''>Tomato </h4>
        <p className=' p-0 m-0   '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur laudantium veniam dicta     .</p>
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
<div className="cart_body mb-2 ">
<div className="row align-items-center">
<div className="col-lg-2 col-md-12">
  <div className="cart_images">
    <img src={img3} alt="" className="img-fluid" />
  </div>
</div>
<div className="col-lg-10 col-md-12">

  <div className="cart_desc ">
    <div>
      <div className="title_cart mb-2">
        <h4 className=''>Tomato </h4>
        <p className=' p-0 m-0   '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur laudantium veniam dicta     .</p>
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

<div className="total_amount px-4">
<div className="subtotal">
<h3 className=' '>Subtotal </h3>
<span>৳ 490</span>
</div>
<div className="subtotal">
<h3 className=' '>Shipping estimate </h3>
<span>৳ 260</span>
</div>
<div className="subtotal">
<h3 className=' '>Tax estimate </h3>
<span>৳ 300</span>
</div>
<div className="total">

<h3 className='total_heading fw-bold'> Order total</h3>
<span>৳ 2300</span>
</div>
<NavLink to="/cheakout" className="my-btn sub-heading  w-100 d-block text-center py-2 ">Confrim Order</NavLink>

</div>


{/* body  end */}
</div>
      </div>
        {/* order summery end */}

              </div>
            </div>
          </div>

 

      </section>

    </>
  )
}

export default CheakOut