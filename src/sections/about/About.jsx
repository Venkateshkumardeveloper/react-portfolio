import React from 'react'
import './about.css'
import AboutImage from '../../assests/venky wing img.jpg'
import CV from '../../assests/VenkateshFullStack.pdf'
import {HiDownload } from 'react-icons/hi' 
import Card from '../../Components/Card'
import data from './data'


const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>

        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item=>(
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects using HTML, CSS,JavaScript and ReactJs like portofolio,Calculator,Profile,WeatherApp.
            I am happy do this projects. I'm always motivated to do more!
          </p>

          <p>
            Hi, my name is Venkatesh Kumar from Srilkalahati, Andhra pradesh. I'm a full-stack web
            developer with a BTech degree in Computer Science.My top priority is to  get Your bussiness 
            online the right way, giving you industry-standard design and all the right way, giving you
            industry-standard design and all the functionality you need to operate smoothly online.
            Get in touch  today with the details of your project let's get started Check out my resume below! 
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/> </a>
        </div>

      </div>

    </section>
  )
}

export default About