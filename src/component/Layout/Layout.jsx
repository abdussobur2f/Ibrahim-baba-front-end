import React,{useState} from 'react'
import Header from '../Header'
  import Home from '../../pages/home/Home'
 
//  import ProductDisplay from '../../component/ProductDisplay/ProductDisplay'
const Layout = () => {
  const [showMenu,setShowMenu ] = useState(false)

  const sidebarShow = () =>{
    setShowMenu(true)
    
 
  }
 
  const hideMenu = () =>{
    setShowMenu(false)
    console.log("hellp")
    
 
  }
 

  return (
    <>
    <Header sidebarShow={sidebarShow} />
   
 
<Home showMenu={showMenu} hideMenu={hideMenu}/>

 
  

      
 
     

   
    </>
  )
}

export default Layout