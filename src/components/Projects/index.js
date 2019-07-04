import React from 'react'
import './style.scss'
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget augue id orci vestibulum varius. Curabitur orci mi, rutrum sed tincidunt vel, dictum efficitur leo. Nullam cursus, eros tincidunt pulvinar rutrum.</p>
          </div>
        </div>
      </div>
    </section>
  )
};


export default Projects;