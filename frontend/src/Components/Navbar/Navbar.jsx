import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState(window.location.pathname)
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li menu={menu} onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">Shop</Link> {menu?.includes("shop") || menu === "/" ?<hr/>:<></>}</li>
                <li menu={menu} onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to="/mens">Men</Link> {menu === "mens" || menu === "/mens"  ?<hr/>:<></>}</li>
                <li menu={menu} onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to="/womens">Women</Link> {menu === "womens" ||  menu === "/womens"?<hr/>:<></>}</li>
                <li menu={menu} onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link> {menu?.includes("kids")?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <nav className="nav-cart-count">
                    {getTotalCartItems()}
                </nav>
            </div>

        </div>
    )
}

export default Navbar;