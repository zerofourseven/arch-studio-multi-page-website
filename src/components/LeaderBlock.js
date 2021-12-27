import React from 'react'
import { Link } from 'react-router-dom'
import { leaderData } from '../data/data'
import twitterIcon from '../assets/icons/icon-twitter.svg'
import linkedInIcon from '../assets/icons/icon-linkedin.svg'

const LeaderBlock = () => {
    return (
        <section className='container block leader-block'>
            <h2 className='leader-block__title'>The<br/>Leaders</h2>
            <div className='leader-block__grid'>
                {
                    leaderData.map((leader, index) => {
                    const {image, name, title} = leader;
                    return (

                            <figure className="leader-block__grid-leader" key={index}>
                                <picture>

                                    <source srcSet={image} type="image/jpeg"/>
                                    <img
                                    src={image}
                                    alt={name}
                                    className="leader-image"
                                    />
                                </picture>

                                <div>
                                    <h3>{name}</h3>
                                    <p>{title}</p>
                                    <Link to="" className="leader-icon-link">
                                        <img src={linkedInIcon} alt="LinkedIn icon" className="leader-icon" />
                                    </Link>
                                    <Link to="" className="leader-icon-link">
                                        <img src={twitterIcon} alt="Twitter icon" className="leader-icon" />
                                    </Link>
                                    
                                </div>
                            
                            </figure>
                    );
                    }

                    )

                }
            </div>
            
        </section>
    )
}

export default LeaderBlock
