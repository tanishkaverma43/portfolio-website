import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Tanishka</h2>
        <p>Hi, I'm Tanishka Verma, a passionate and dedicated full-stack web developer proficient in modern technologies such as HTML, CSS, JavaScript, React.js, PHP, and more. With a keen eye for detail and a drive for excellence, I'm excited to embark on my journey as a fresher in the field, ready to contribute my skills and learn from every opportunity." </p>
        <a href="https://www.linkedin.com/in/tanishkaverma02/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
