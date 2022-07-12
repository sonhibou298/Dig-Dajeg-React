import {useRef} from "react";
import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa"

function NavBar() {
const navRef = useRef();
const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav")
}
    return (
        <header className="header">
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Accueil</a>
                <a href="/#">Service</a>
                <a href="/#">Bloc</a>
                <a href="/#">Room</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}
export default NavBar;