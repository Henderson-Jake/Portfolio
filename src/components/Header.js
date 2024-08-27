import React from "react";
import './Header.css';
import logo from "../logo.png"; 

function Header () {
    return (
        <div className="header">
            <div className="nav">
                <button className="logo-button">
                    <img src={logo} alt="Logo" />
                </button>
                <div className="nav-buttons">
                    <button>  
                        <span>About Me</span>
                    </button>
                    <button>
                        <span>Projects</span>
                    </button>
                </div>
                <button className="contact-button">
                    <span>Contact Me</span>
                </button>
            </div>
        </div>
    );
}

export default Header;