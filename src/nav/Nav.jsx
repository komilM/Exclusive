import React from 'react'
import "./Nav.css"
import searchicon from "../assets/Component 2.png"
import selected from "../assets/Wishlist.png"
import savat from "../assets/Cart1 with buy.png"

const Nav = () => {
    return (
        <div className=''>
            <div className="body">
                <h1>Exclusive</h1>
                <div className="nav-menu">
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Sign Up</p>
                </div>
                <input type="text" placeholder='What are you looking for ?' />
                <img style={{ width: "20px", height: "20px", position: "relative", marginLeft: "-230px", marginTop: "9px" }} src={searchicon} alt="" />
                <div className="nav-menu-2">
                    <img src={selected} alt="" />
                    <img src={savat} alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Nav
