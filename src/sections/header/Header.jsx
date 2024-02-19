import React from 'react'
import './header.css'
import HeaderImage from  '../../assests/venky img.jpg'
import data from './data.js'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header portait" />
        </div>
        <h3>Venkatesh Kumar</h3>
        <h4>Certified Full Stack Developer</h4>
        <p>A passionate jobseeker with hands on experience in developing and designing
          web applications using HTML, CSS, JavaScript, React and other front end
          frameworks. Including developing and deploying complex backend systems
          with PYTHON & DJANGO, web services and databases.
          </p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(item=> <a key={item.id} href={item.link} target='_blank' rel="noopener noreferrer">{item.icon}</a> )
            }

          </div>
      </div>
    </header>
  )
}

export default Header