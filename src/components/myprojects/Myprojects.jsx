import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img12.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Placement Cell</h3>
            <small className='text-light'>Ejs | Node js | MongoDB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Venturesum1" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Weather App</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Venturesum1/Weather__app" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://weather-app-01-five.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  

            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>TO_DO_APP</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Venturesum1/TO-DO_APP" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://to-do-app-gold-beta.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>GO_TO_TRAVEL</h3>
            <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Venturesum1/Travel_with_me" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://travel-with-me-mu.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>My Portfolio(This Website)</h3>
            <small className='text-light'>React js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Venturesum1/" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/Venturesum1/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects