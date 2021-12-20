import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebarToggle, toggleSidebar}) => {
    return (
        <>
        <div className="shadow" onClick={toggleSidebar}>

        </div>
        <aside className="sidebar" >
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