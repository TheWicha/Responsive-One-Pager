import React from 'react'
import './style.scss'
import img from '../../img/ipad.png'

function About(props) {
  return (
    <section className='about'>
      <a className="anchor" id="about" href="#about"> </a>
      <div className='about-container'>
        <div className='about-center'>
          <h2>Build with passion!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam eget augue id orci vestibulum varius.
            Curabitur orci mi, rutrum sed tincidunt vel, dictum efficitur leo.
            Nullam cursus, eros tincidunt pulvinar rutrum.
          </p>
        </div>
        <img className='about-img' alt='' src={img} />
      </div>
    </section>
  )
};


export default About;