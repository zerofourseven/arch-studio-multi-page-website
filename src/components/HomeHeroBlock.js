import React from 'react'
import { slideData } from '../data/data'
import Button from './Button'

const HomeHeroBlock = () => {
    const delay = 2500;

    //TODO setup auto-timer and also Desktop buttons for choosing slide


    return (
        <section className='container block home-hero-block'>
            <div>
            {
                slideData.map((project, index) => {
                const { title, description, image} = project;
                return (

                    <article className="home-hero-block__slide" key={index}>
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
            
        </section>
    )
}

export default HomeHeroBlock
