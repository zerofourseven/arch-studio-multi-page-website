import React from 'react'
import heroImgMobile from '../assets/about/mobile/image-hero.jpg'
import heroImgTablet from '../assets/about/tablet/image-hero.jpg'
import heroImgDesktop from '../assets/about/desktop/image-hero.jpg'

const SecondaryHeroBlock = () => {
    return (
        <section className='container block secondary-hero-block'>
            <div className="secondary-hero-block__image-container">
                <picture>
                    <source srcSet={heroImgDesktop} media="(min-width: 1440px)" type="image/jpeg"/>
                    <source srcSet={heroImgTablet} media="(min-width: 768px)" type="image/jpeg"/>
                    <source srcSet={heroImgMobile} type="image/jpeg"/>
                    <img
                    srcSet={`${heroImgMobile} 375w, ${heroImgTablet} 573w, ${heroImgDesktop} 635w`}
                    src={heroImgMobile}
                    alt="The hands of a man in a white sweater typing on a laptop"
                    className="secondary-hero-block__image"
                    />
                </picture>
            </div>
            <h1 className='large-header disable-select secondary-hero-block__large-header'>About</h1>
            <div className='secondary-hero-block__text'>
                <h2>Your team of<br/>Professionals</h2> 
                <p>
                Our small team of world-class professionals will work with you every step of the way. 
                Strong relationships are at the core of everything we do. This extends to the 
                relationship our projects have with their surroundings.
                </p>
            </div>

        </section>
    )
}

export default SecondaryHeroBlock
