import React from 'react'
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/icons/icon-arrow.svg';

const Button = ({className, linkName, text, arrow, altText}) => {
    return (
        <Link to={linkName} className={className ? className : null}>
            <button className="button">
               {text ? text : null} {arrow ? <img src={arrowIcon} alt={altText} className="button__arrow" /> : null}
            </button>
        </Link>
    )
}

export default Button
