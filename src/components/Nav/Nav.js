import React from 'react'
import "./Nav.css"
import Hamberger from "../Hamberger/Hamberger.js"
const Nav = ({setCategory}) => {
  return (
    <div className="nav">
        <div className="icon">
            <Hamberger setCategory={setCategory}/>
        </div>
        <img 
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        style={{cursor: "pointer"}} 
        height="80%"
        alt="" />
    </div>
  )
}

export default Nav