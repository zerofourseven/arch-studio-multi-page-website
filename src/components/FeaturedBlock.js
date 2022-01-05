import React from 'react'
import Button from './Button';
import { featuredData } from '../data/data';
import { Link } from 'react-router-dom';


const FeaturedBlock = () => {
    return (
        <section className="container block featured-block" role='complementary'>
            <h2 className="featured-block__title">Featured</h2>
            <Button className="featured__button" linkName="/portfolio" text="see all" arrow="true" altText="View portfolio" />
            <div className="featured-grid">
            {
                featuredData.map((project, index) => {
                const { title, image} = project;
                return (
                    <Link to="/portfolio" key={index}>
                        <article className="portfolio-grid__project">
                            <div className='project__gradient'>
                            </div>
                            <picture>
                                <source srcSet={image.webp.desktop} media="(min-width: 1440px)" type="image/webp"/>
                                <source srcSet={image.webp.tablet} media="(min-width: 600px)" type="image/webp"/>
                                <source srcSet={image.webp.mobile} type="image/webp"/>

                                <source srcSet={image.jpeg.desktop} media="(min-width: 1440px)" type="image/jpeg"/>
                                <source srcSet={image.jpeg.tablet} media="(min-width: 600px)" type="image/jpeg"/>
                                <source srcSet={image.jpeg.mobile} type="image/jpeg"/>
                                <img
                                srcSet={`${image.jpeg.mobile} 311w, ${image.jpeg.tablet} 573w, ${image.jpeg.desktop} 350w`}
                                sizes="(min-width: 1440px) 350px, (min-width: 600px) 573px, 311px"
                                src={image.jpeg.mobile}
                                alt={title}
                                className="project__image"
                                />
                            </picture>
                                
                                
                            
                            <h1 className="large-header project__number disable-select">{index + 1}</h1>
                              
                            <div className="project__info">
                                <h3>{title}</h3>
                                <p>View All Projects</p>
                            </div>
                        
                        </article>
                    </Link>
                );
                }

                )

            }
            </div>
            
            
        </section>
    )
}

export default FeaturedBlock
