import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import arrowIcon from '../assets/icons/icon-arrow.svg';

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__logo-background">
                <img src={logo} alt="company-logo" className="footer__logo" />
            </div>
            <ul className="footer__links">
                <li className="footer__item"><Link to="/portfolio">Portfolio</Link></li>
                <li className="footer__item"><Link to="/about">About Us</Link></li>
                <li className="footer__item"><Link to="/contact">Contact</Link></li>
            </ul>
            <Link to="/portfolio">
                <button className="button">
                    see our portfolio <img src={arrowIcon} alt="View portfolio" className="button__arrow" />
                </button>
            </Link>
            
        </footer>
    )
}

export default Footer
