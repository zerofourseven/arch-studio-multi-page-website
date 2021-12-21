//do map with the 12 grid images.
//fill grid with 12 articles, each article has data of 3 image sizes, title and date. 
/*

/*

<picture>
    <source
      type="image/webp"
      srcset="images/banner.webp 1x, images/banner@2x.webp 2x"
    />
    <source
      type="image/png"
      srcset="images/banner.png 1x, images/banner@2x.png 2x"
    />
    <img class="hero__image" src="images/banner.png" alt="" />
  </picture>


*/

import React from 'react'
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/data';

const PortfolioPage = () => {
  return (
    <div className="portfolio-grid container">  
      {
        portfolioData.map((project, index) => {
          const { title, date, image} = project;
          return (
            <Link to="" key={index}>
              <article className="portfolio-grid__project">
                <img
                  /*srcset=""
                  sizes=""*/
                  src={image.mobile}
                  alt={title}
                >
                </img>
                <h3>{title}</h3>
                <p>{date}</p>
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
