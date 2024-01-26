import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="container">
            <h1>The Shop</h1>
            <ul className="nav-links">
                <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to="/contact" className='nav-link'>Contact us</NavLink></li>
                <li><NavLink to="/shop" className='nav-link'>Shop</NavLink></li>
                <li><NavLink to="/login" className='nav-link'>
                    <button className="log-in-btn">Log in</button>
                </NavLink></li>
                <li><NavLink to='#' className='nav-link nav-cart'><FaShoppingCart /></NavLink></li>
            </ul>
        </div>
    </nav>
    )
}
