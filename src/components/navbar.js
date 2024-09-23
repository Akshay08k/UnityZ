import 'bootstrap/dist/css/bootstrap.css';
import "../navStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import logo from './logo3.png';

const Navbar = () => {

    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);

    return (
        <div className="header">

            <div className="nav-logo-link d-flex">

                <div className="hamburger" onClick={handleClick}>
                    {Click ? (<FaTimes size={20} style={{ color: "#050C9C" }} />) : (<FaBars size={20} style={{ color: "050C9C" }} />)}
                </div>

                <Link to="/">
                    <div className="my-logo">
                        <img src={logo} alt="Logo" />
                        <div className='my-logo-text d-flex'>
                            <span>nity</span>
                            <span className='my-z'>Z</span>
                        </div>
                    </div>
                </Link>

                <div className={Click ? "nav-menu active" : "nav-menu"}>

                    <span><Link to="/">Home</Link></span>

                    <span><Link to="/how_it_works">How It Works</Link></span>

                    <span><Link to="/hire_freelancer">Hire Freelancer</Link></span>

                    <span><Link to="/contact_us">Contact Us</Link></span>

                    <span><Link to="/about_us">About Us</Link></span>

                </div>
            </div>
            <div class="s-button">
                <a href="" className="login">Log In</a>
                <a href="" className="signin">Sign In</a>
            </div>
        </div>
    )
}

export default Navbar;