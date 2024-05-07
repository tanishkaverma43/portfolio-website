import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/IIRS.png'
import img5 from  '../../images/portfolio2.png'
import img3 from  '../../images/doctor.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "GEOSPATIAL DATA LIBRARIAN WEBSITE " img= {img7} link = "https://github.com/tanishkaverma43/Satellite-Data-Library"  />
            <ProjectBox title = "PORTFOLIO WEBSITE" img= {img5} link = "https://github.com/ahmedrohailawan/portfolio_website_using_html_css_and_js"  />
            <ProjectBox title = "MEDICAL CONSULT RESERVATION WEBSITE" img= {img3} link = "https://github.com/tanishkaverma43/Medical-Consult-Reservation"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
