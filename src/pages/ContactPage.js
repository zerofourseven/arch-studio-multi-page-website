import React from 'react'
import SecondaryHeroBlock from '../components/SecondaryHeroBlock'
import FormBlock from '../components/FormBlock'
import heroImgMobile from '../assets/contact/mobile/image-hero.jpg'
import heroImgTablet from '../assets/contact/tablet/image-hero.jpg'
import heroImgDesktop from '../assets/contact/desktop/image-hero.jpg'
import ContactDetailsBlock from '../components/ContactDetailsBlock'


const ContactPage = () => {

    const pText=`We’d love to hear more about your project. Please, leave a message below or give 
    us a call. We have two offices, one in Texas and one in Tennessee. If you find 
    yourself nearby, come say hello!`;

    const images = [heroImgMobile, heroImgTablet, heroImgDesktop];

    const altText=`A black rotary dial phone`
    
    return (
        <>
            <SecondaryHeroBlock header="Contact" title={<h2>Tell us about<br/>your project</h2>} text={pText} images={images} altText={altText}/>
            <ContactDetailsBlock />
            <FormBlock />
        </>
    )
}

export default ContactPage
