import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebarToggle, toggleSidebar}) => {
    return (
        <>
        <div id="shadow" className={sidebarToggle ? "shadow" : "shadow shadow--closed"} onClick={toggleSidebar}></div> 
        <aside id="sidebar" className={sidebarToggle ? "sidebar" : "sidebar sidebar--closed"} >
            <ul className="sidebar__links">
                <li className="sidebar__item"><Link to="/portfolio">Portfolio</Link></li>
                <li className="sidebar__item"><Link to="/about">About Us</Link></li>
                <li className="sidebar__item"><Link to="/contact">Contact</Link></li>
            </ul>
        </aside>
        </>
    )
}

export default Sidebar;