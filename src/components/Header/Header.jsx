import React from 'react'
import  {useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false)
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800)
    {
      return{ right:!menuOpened && "-100%"}
    }
  }
  return (
   
    <section className="h-wrapper" height="10px">
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <div className=" flexCenter paddings inerWidth h-container">
        <div className="logo">
      <img src="./logo.png" alt="logo"width={100}/>
      </div>
      <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false);
      }}>
      <div className="flexCenter h-menu"
      style={getMenuStyles(menuOpened)}>
        <a href="">Residencies</a>
        <a href="">our value</a>
        <a href="">Contact us</a>
        <a href="">Get Started</a>
        <button className="button ">
        <a href="">Contact</a>
        </button> 
        

      </div>
      </OutsideClickHandler>
      <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
   <BiMenuAltRight size={30}/>
     </div>
      </div>
     
     
     
      </section>
  )
}

export default Header