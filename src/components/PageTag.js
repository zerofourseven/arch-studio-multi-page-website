import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTag = () => {
    let currentLocation = useLocation().pathname.split('/')[1];
    console.log(currentLocation);

    if(!currentLocation) 
        currentLocation = 'home';
    
    if(currentLocation === 'about') 
        currentLocation = 'about us';
    

    return (
        <div className='page-tag'>
            <hr />
            <p className='disable-select'>{currentLocation}</p>
            
        </div>
    )
}

export default PageTag
