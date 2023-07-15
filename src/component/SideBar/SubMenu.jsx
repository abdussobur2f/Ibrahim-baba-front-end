import { useState } from "react"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai"
import '../SideBar/Sidebar.scss'

const SubMenu = ({item}) =>{
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title ">
                    <span onClick={() => setOpen(!open)}>
                      
                    
						
					 {item.title}   
					 
                    </span> 
					{
						open ?   <AiOutlineMinus/> : <AiOutlinePlus/>
					}
                </div>
                <div className="sidebar-content">
                  

				   { item.childrens.map((child, index) => <SubMenu key={index} item={child} />) }
				 
                </div>
            </div>
        )
    }else{
        return (
           <span href={item.path || "#"} className="sidebar-item plain">
                
                {item.title}
            </span>
        )
    }
}

export default SubMenu ;