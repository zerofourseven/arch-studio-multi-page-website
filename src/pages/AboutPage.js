import React from 'react'
import SecondaryHeroBlock from '../components/SecondaryHeroBlock'
import LeaderBlock from '../components/LeaderBlock'
import HeritageImage from '../assets/about/desktop/image-heritage.jpg'

const AboutPage = () => {
    return (
        <>
           <SecondaryHeroBlock/>
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
