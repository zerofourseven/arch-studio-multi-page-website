import React from 'react'


import WelcomeBlock from '../components/WelcomeBlock';
import FeaturedBlock from '../components/FeaturedBlock';
import HomeHeroBlock from '../components/HomeHeroBlock';
import Button from '../components/Button';
import aboutImgMobile from '../assets/home/mobile/image-small-team.jpg'
import aboutImgTablet from '../assets/home/tablet/image-small-team.jpg'
import aboutImgDesktop from '../assets/home/desktop/image-small-team.jpg'

const HomePage = () => {
    return (
        <main>
            <HomeHeroBlock />
            <WelcomeBlock />
            <section className="container block about-link-block" role='complementary'>
                <div className="about-link-block__image-container">
                    <picture>
                        <source srcSet={aboutImgDesktop} media="(min-width: 1440px)" type="image/jpeg"/>
                        <source srcSet={aboutImgTablet} media="(min-width: 768px)" type="image/jpeg"/>
                        <source srcSet={aboutImgMobile} type="image/jpeg"/>
                        <img
                            srcSet={`${aboutImgMobile} 375w, ${aboutImgTablet} 573w, ${aboutImgDesktop} 1110w`}
                            sizes="(min-width: 1440px) 1110px, (min-width: 768px) 573px, 375px"
                            src={aboutImgMobile}
                            alt="A white modern building with water and a blue sky"
                            className="about-link-block__image"
                        />
                    </picture>
                </div>
                <div className="about-link-block__contents">
                    <h2 className="about-link-block__small-header">Small team,<br/>big ideas</h2>
                    <Button className="about-link-block__button" linkName="/about" text="about us" arrow="true" altText="View about us page" />
                </div>
                
            </section>
            <FeaturedBlock />
        </main>
    )
}

export default HomePage
