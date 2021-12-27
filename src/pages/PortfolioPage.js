import React from 'react'
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';


const PortfolioPage = () => {
  return (
    <div className="portfolio-grid container">  
      {
        portfolioData.sort((a, b) => b.date - a.date).map((project, index) => {
          const { title, date, image} = project;
          return (
            <Link to="" key={index}>
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
                      /*sizes="" i have to use this too... also might run into issues bc the images are different ratios... */
                      src={image.jpeg.mobile}
                      alt={title}
                      className="project__image"
                    />
                  </picture>
                
                
                
               <div className="project__info">
                <h3>{title}</h3>
                  <p>{date.toLocaleString('default', { month: 'long'} ) + " " + date.getFullYear()}</p>
               </div>
               
              </article>
            </Link>
          );
        }

        )

      }
      
    </div>
  )
}

export default PortfolioPage
