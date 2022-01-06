import React from 'react'
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/icons/icon-arrow.svg';


const Button = ({className, btnClassname, linkName, text, arrow, altText}) => {
    return (
        <Link to={linkName} className={className ? `button ${btnClassname} button-link ${className}` : `button ${btnClassname} button-link`}>
               {text ? text : null} {arrow ? <img src={arrowIcon} alt={altText} className="button__arrow" /> : null}
        </Link>
    )
}

Button.defaultProps = {
    btnClassname: '',
    linkName: '#',
    altText: 'Navigation button'
}

export default Button
