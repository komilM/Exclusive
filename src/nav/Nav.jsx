import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <div className='body'>
            <h1>Exclusive</h1>
            <div className="nav-menu">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Sign Up</p>
            </div>
            <input type="text" placeholder='What are you looking for?' />
        </div>
    )
}

export default Nav
