import React from 'react'
import './about.css'
import myImage from '../../assets/my-image3.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Computer science of Engeneering <br /><i>Chitkara University , HP</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current CGPA(GPA)</h5>
                  <br></br>
                  <small>9.40(3.4)</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>1.Algorithms and Data Structures</li>
                      <li>2.Programming Languages</li>
                      <li>3.Operating Systems</li>
                      <li>4.Frontend Developemnt </li>
                      
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            I attend Chitkara University as an undergraduate studying <b>Computer Science Engineering</b>. I'm a motivated and passionate student studying software engineering who is looking for a demanding internship to put my technical knowledge to use. I am excited to contribute to creative initiatives and absorb knowledge from seasoned specialists in the field. I have a solid academic background in software engineering and practical expertise with a variety of programming languages. I pick things up quickly and am always up for a challenge.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About