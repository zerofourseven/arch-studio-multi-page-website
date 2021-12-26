import React from 'react'
import { Link } from 'react-router-dom';

import WelcomeBlock from '../components/WelcomeBlock';
import FeaturedBlock from '../components/FeaturedBlock';

const HomePage = () => {
    return (
        <>
            <WelcomeBlock />
            <section className="container block" >

            </section>
            <FeaturedBlock />
        </>
    )
}

export default HomePage
