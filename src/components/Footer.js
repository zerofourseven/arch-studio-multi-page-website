import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Button from './Button';

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
            <Button linkName="/portfolio" text="see our portfolio" arrow="true" altText="View portfolio" />
        </footer>
    )
}

export default Footer
