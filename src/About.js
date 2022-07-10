import React from 'react'
import Btn from './Btn'
import image from './me.jpeg'
import Table from './Table'

const About = () => {
   

  return (
    <div>
        <section className="about">
            <div className="aboutContent">
            <img src={image} alt="my" />
            <div className="details">
                <h1>About Me</h1>
                <p>Hello! I'm Ernest,a front-end developer,a web design enthusiast,and a guy known for code quality. if you have a project that you want to get started or think you need my help with something,then let's get in touch.</p>
                <Table/>
                <Btn text="Download CV"/>
            </div>
            </div>
            
        </section>
    </div>
  )
}

export default About