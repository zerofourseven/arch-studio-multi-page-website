import React from 'react'
import SecondaryHeroBlock from '../components/SecondaryHeroBlock'
import LeaderBlock from '../components/LeaderBlock'
import HeritageImage from '../assets/about/desktop/image-heritage.jpg'
import heroImgMobile from '../assets/about/mobile/image-hero.jpg'
import heroImgTablet from '../assets/about/tablet/image-hero.jpg'
import heroImgDesktop from '../assets/about/desktop/image-hero.jpg'



const AboutPage = () => {
    const pText = `Our small team of world-class professionals will work with you every step of the way. 
Strong relationships are at the core of everything we do. This extends to the 
relationship our projects have with their surroundings.`

const images = [heroImgMobile, heroImgTablet, heroImgDesktop];

const altText=`The hands of a man in a white sweater typing on a laptop`;

    return (
        <>
           <SecondaryHeroBlock header="About" title={<h2>Your team of<br/>Professionals</h2>} text={pText} images={images} altText={altText}/>
            <section className='container block heritage-block'>
                <div className='heritage-block__grid'>
                    <div>
                        <h2>Our <br/>Heritage</h2> 
                        <p>
                        Founded in 2007, we started as a trio of architects. Our complimentary skills and 
                        relentless attention to detail turned Arch into one of the most sought after boutique 
                        firms in the country.
                        </p><p>
                        Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
                        live in harmony with their surroundings. We consider every detail from every surrounding 
                        element to inform our designs.
                        </p><p>
                        Our small team of world-class professionals provides input on every project.
                        </p>
                    </div>
                    <img src={HeritageImage} alt="Side of a curved gray concrete building with many windows" />
                </div>
                

            </section>
            <LeaderBlock />
        </>
    )
}

export default AboutPage
