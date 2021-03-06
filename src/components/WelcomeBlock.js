import React from 'react'
import welcomeImage from '../assets/home/desktop/image-welcome.jpg'

const WelcomeBlock = () => {
    return (
        <section className="container block welcome-block" id='welcome-block' >
                <h1 className="large-header welcome-block__large-header disable-select">Welcome</h1>
                <div  className="welcome-block__grid">
                    <div className="welcome-block__text">
                        <h2>Welcome to <br/>Arch Studio</h2>
                        <p>
                            We have a unique network and skillset to help bring your projects to life. Our 
                            small team of highly skilled individuals combined with our large network put us 
                            in a strong position to deliver exceptional results.
                        </p><p>
                            Over the past 10 years, we have worked on all kinds of projects. From stations 
                            to high-rise buildings, we create spaces that inspire and delight.
                        </p><p>
                            We work closely with our clients so that we understand the intricacies of each 
                            project. This allows us to work in harmony the surrounding area to create truly 
                            stunning projects that will stand the test of time.
                        </p>
                    </div>
                    <img src={welcomeImage} alt="Side of a silver building" className="welcome-block__image"/>
                </div>
            </section>
    )
}

export default WelcomeBlock
