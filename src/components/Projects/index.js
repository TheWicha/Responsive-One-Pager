import React from 'react'
import './style.scss'
import posts from './posts'
import MistyMountains from './MistyMountains'
import img1 from '../../img/demo-image-01.jpg'
import img2 from '../../img/demo-image-02.jpg'
import img3 from '../../img/bg-masthead.jpg'

function Projects(props) {
  return (
    <section className='projects'>
      <button className="anchor" id="projects" />
      <div className="projects-container">
        <img src={img3} alt="mountains"/>
        <div className="project-text">
          <h4>Shoreline</h4>
          <p>{posts[0].text}</p>
        </div>
      </div>
      <div ckassName="misty-wrapper">
        <MistyMountains
          tittle={posts[0].title}
          img={img1}
          text={posts[1].text}
        />
        <MistyMountains
          tittle={posts[1].title}
          img={img2}
          text={posts[1].text}
        />
      </div>
    </section>
  )
};


export default Projects;