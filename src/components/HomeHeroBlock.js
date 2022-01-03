import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { slideData } from '../data/data'
import Button from './Button'

const HomeHeroBlock = () => {
    const duration = 13000;
    const [chosenSlide, setChosenSlide] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if(timeoutRef.current) 
            clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => 
            setChosenSlide((slide) => 
                slide === slideData.length - 1 ? 0 : slide + 1
            ), duration);


        return () => {
            if(timeoutRef.current) 
                clearTimeout(timeoutRef.current);
        };

    }, [chosenSlide]);

    return (
        <section className='container block home-hero-block'>
            <div className='home-hero-block__slideshow-container'>
                <div className='home-hero-block__slideshow'>
                {
                    slideData.map((project, index) => {
                    const { title, description, image} = project;
                    let slideState = index === chosenSlide ? ' active' : '';
                    /*if (index === chosenSlide - 1 || chosenSlide === 0 && index === slideData.length){
                        slideState = ' active-previous';
                    }*/
                    return (

                        <article className={`home-hero-block__slide${slideState}`} key={index}>
                            <div className='home-hero-block__image-container'>
                                <picture>
                                    <source srcSet={image.desktop} media="(min-width: 1440px)" type="image/webp"/>
                                    <source srcSet={image.tablet} media="(min-width: 600px)" type="image/webp"/>
                                    <source srcSet={image.mobile} type="image/webp"/>

                                    <source srcSet={image.desktop} media="(min-width: 1440px)" type="image/jpeg"/>
                                    <source srcSet={image.tablet} media="(min-width: 600px)" type="image/jpeg"/>
                                    <source srcSet={image.mobile} type="image/jpeg"/>
                                    <img
                                    srcSet={`${image.mobile} 375w, ${image.tablet} 573w, ${image.desktop} 1110w`}
                                    src={image.mobile}
                                    alt={title}
                                    className="project__image"
                                    />
                                </picture>
                            </div>

                            <div className="project__info">
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <Button btnClassname="home-hero-block__portfolio-button" linkName="/portfolio" text="see our portfolio" arrow="true" altText="View portfolio" />
                            </div>
                            
                        
                        </article>
                    
                    );
                    }

                    )

                }
                    
                </div>
                
            </div>
            <div className='home-hero-block__slideshow-buttons'>
                {
                    slideData.map((project, index) => {
                        let buttonState = index === chosenSlide ? ' button--active' : '';
                        return (
                            <button key={index} className={`button${buttonState}`} onClick={() => {setChosenSlide(index);}}>0{index + 1}</button>
                        );
                    }
                    )

                }
                    
                </div>
        </section>
    )
}

export default HomeHeroBlock
