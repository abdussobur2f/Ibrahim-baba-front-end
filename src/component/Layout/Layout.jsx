import React from 'react'
import Header from '../Header'
  import Home from '../../pages/home/Home'
 import { Routes ,Route } from 'react-router-dom'
//  import ProductDisplay from '../../component/ProductDisplay/ProductDisplay'
const Layout = () => {
  return (
    <>
    <Header/>
   
 
<Home/>

 <Routes>
 <Route path='header' element={<Header />} />

 <Route path='mainhome' element={<Home />} />



 </Routes>
  

      
 
     

   
    </>
  )
}

export default Layout