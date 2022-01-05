import React from 'react'

//For the Hero block shared b/w About and Contact pages
const SecondaryHeroBlock = ({header, title, text, images, altText}) => {
    return (
        <section className='container block secondary-hero-block'>
            <div className="secondary-hero-block__image-container">
                <picture>
                    <source srcSet={images[2]} media="(min-width: 1440px)" type="image/jpeg"/>
                    <source srcSet={images[1]} media="(min-width: 768px)" type="image/jpeg"/>
                    <source srcSet={images[0]} type="image/jpeg"/>
                    <img
                    srcSet={`${images[0]} 375w, ${images[1]} 573w, ${images[2]} 635w`}
                    sizes="(min-width: 1440px) 635px, (min-width: 768px) 573px, 375px"
                    src={images[0]}
                    alt={altText}
                    className="secondary-hero-block__image"
                    />
                </picture>
            </div>
            <h1 className='large-header disable-select secondary-hero-block__large-header'>{header}</h1>
            <div className='secondary-hero-block__text'>
                {title}
                <p>
                    {text}
                </p>
            </div>

        </section>
    )
}

export default SecondaryHeroBlock
