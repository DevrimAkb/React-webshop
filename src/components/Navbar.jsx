import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { DropDown } from './DropDown';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const { totalQuantity } = useSelector(state => state.shoppingCart)
  return (
    <nav className='navbar'>
        <div className="container">
            <h1>ElectroShop</h1>
            <ul className="nav-links">
                <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to="/contact" className='nav-link'>Contact us</NavLink></li>
                <li><NavLink to="/login" className='nav-link'>
                    <button className="log-in-btn">Log in</button>
                </NavLink></li>
                <li className="relative">
                    { totalQuantity > 0 && <div className="absolute right-0 bg-red-800 text-white w-4 h-4 flex items-center justify-center rounded-full z-10">
                        <p className="text-xs">{ totalQuantity }</p>
                    </div>}
                    <DropDown>
                        <FaShoppingCart className="text-white cursor-pointer"/>
                    </DropDown>
                </li>


            </ul>
        </div>
    </nav>
    )
}
