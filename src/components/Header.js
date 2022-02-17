import React, {useState, useContext} from 'react'
import Menu from './images/bars-solid.svg'
import Close from './images/times-solid.svg'
import Cart from './images/cart.svg'
import {Link} from 'react-router-dom'
import { DataContext } from './DataProvider'
// import {DataContext} from './DataProvider'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            

            <div className="logo">
                <h1><Link to="/products">KTARI</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Login / Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="cart-icon">
                <span>
                    {cart.length}
                </span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
            
        </header>
    )
}
