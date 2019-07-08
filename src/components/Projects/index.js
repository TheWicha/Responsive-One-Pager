import React from 'react'
import './style.scss'
import posts from './posts'
import img1 from '../../img/demo-image-01.jpg'
import img2 from '../../img/demo-image-02.jpg'
import image from '../../img/bg-masthead.jpg'

function Projects(props) {
  return (
    <section className='projects'>
      <div className='projects-container'>
        <div className='projects-first-pair'>
          <div className='projects-first-element'>
            <img alt='' src={image} />
          </div>
          <div className='projects-second-element'>
            <h4>Shoreline</h4>
            <p>{posts[0].text}</p>
          </div>
        </div>
        <div className='projects-second-pair'>
        <div className='projects-img-container'>
          <img alt='' src={img1} />
        </div>
        <div className='misty'>
          <h4>Misty</h4>
          <p>{posts[1].text}</p>
          <hr></hr>
        </div>
      </div>
      <div className='projects-third-pair'>
        <div className='projects-img-container'>
          <img alt='' src={img2} />
        </div>
        <div className='mountains'>
          <h4>Mountains</h4>
          <p>{posts[1].text}</p>
          <hr></hr>
        </div>
      </div>
      </div>
      
    </section>
  )
};


export default Projects;