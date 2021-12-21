import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icons/icon-hamburger.svg';
import closeIcon from '../assets/icons/icon-close.svg';
import Sidebar from './Sidebar'

//height of 96px. in mobile
//logo, icon that becomes x icon, nav and sidebar z = 2 and shadow z = 1 or whatever
//need onClick event for icon

const Navbar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false); //true = sidebar open, false = sidebar closed

    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    }

    return (
        <>
        <nav className="nav container">
            <Link to="/">
                <img src={logo} alt="company-logo" className="nav__logo" />
            </Link>
            <ul className="nav__links">
                <li className="nav__item"><Link to="/portfolio">Portfolio</Link></li>
                <li className="nav__item"><Link to="/about">About Us</Link></li>
                <li className="nav__item"><Link to="/contact">Contact</Link></li>
            </ul>
            {sidebarToggle ? (
                 <img src={closeIcon} alt="close sidebar" className="nav__close" onClick={toggleSidebar}/>
            ) : (
                <img src={menuIcon} alt="open sidebar" className="nav__menu" onClick={toggleSidebar}/>
            )
            }
        </nav>
        <Sidebar sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default Navbar;
