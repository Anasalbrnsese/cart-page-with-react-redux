import React from "react";
import '../style/Navbar.css';
import { Link } from "react-router-dom";
import Logo from '../images/products-logo.jpg';
import { useSelector } from "react-redux";


function Navbar() {
    const cart = useSelector(state => state.cart);
    return (
        <React.Fragment>
            <header className="header">
                <a href="/" className="logo">
                    <img src={Logo} className="logo-image" alt="none" />
                </a>
                <ul>
                    <Link className="Links" to={'/home'}><li>Home</li></Link>
                    {/* <Link className="Links" to={'/About'}><li>About</li></Link> */}
                    <Link className="Links" to={'/products'}><li>Products</li></Link>
                    <Link className="Links" to={'/cart'}><li>Cart {cart.length}</li></Link>
                </ul>
            </header>
        </React.Fragment>
    )
}
export default Navbar;