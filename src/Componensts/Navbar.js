import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../images/logo.jpg";

function Navbar() {
    const cart = useSelector((state) => state.cart);

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent backdrop-blur-md shadow-md z-50">
            <div className="max-w-[85rem] mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link to="/home" className="flex items-center gap-2">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-12 h-12 rounded-full object-cover border border-blue-300 shadow-sm"
                    />
                    <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        Sportify
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
                        <li>
                            <Link
                                to="/home"
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/products"
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline"
                            >
                                Cart
                                <span className="ml-1 text-sm bg-blue-600 text-white rounded-full px-2 py-[2px]">
                                    {cart.length}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
