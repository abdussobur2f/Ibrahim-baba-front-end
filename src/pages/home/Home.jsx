
// note some mistakis component name it's home page routing page  


import SideBar from "../../component/SideBar/SideBar"
import HomeRoute from "./HomeRoute"
import Footer from '../../component/Footer/Footer'
import { Navigate, Route, Routes, } from 'react-router-dom'
import Flash from '../FlashSales/Flash'
import Category from "../Category/Category"
import CategoryAll from "../Category/CategoryAll"
import LatestProduct from "../LatestProduct/LatestProduct"
import SpecialOffer from "../SpecialOffer/SpecialOffer"
import WhisList from "../WhisList/WhisList"
import CheakOut from "../CheakOut/CheakOut"
 
const Home = ({showMenu,hideMenu}) => {

  return (
    <>
      {/* hero section  */}

      <main className='side_bar position-relative '>
 
  
 
    <SideBar   showMenu={showMenu} hideMenu={hideMenu} />  
 
 
 
 
 
        <aside className='right__side'>
 
          <Routes>
            <Route path="/" element={<Navigate to="home"/>}/>
            <Route exact path='/home' element={<HomeRoute />} />
            <Route path='flash' element={<Flash />} />
            <Route path='Category' element={<Category />} />
            <Route path='CategoryAll' element={<CategoryAll />} />
            <Route path='latestProduct' element={<LatestProduct />} />
            <Route path='Offer' element={<SpecialOffer />} />
            <Route path='whislist' element={<WhisList />} />
           
           
             
            <Route path='cheakout' element={<CheakOut />} />
          
         
 
          </Routes>

          <Footer />
 
        </aside>
 
      </main>
 

    </>
  )
}

export default Home
