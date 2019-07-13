import React, { Component } from 'react'
import './style.scss'
import posts from './posts'
import MistyMountains from './MistyMountains'
import img1 from '../../img/demo-image-01.jpg'
import img2 from '../../img/demo-image-02.jpg'
import img3 from '../../img/bg-masthead.jpg'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      mistyAnimate: false,
    }
    this.handleAnimation = this.handleAnimation.bind(this)
    this.handleSecondAnimation = this.handleSecondAnimation.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleAnimation, true)
    window.addEventListener('scroll', this.handleSecondAnimation, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleAnimation, true);
    window.removeEventListener('scroll', this.handleSecondAnimation, true);
  }


  handleAnimation() {
    if (window.scrollY > 908) {
      return this.setState({ animate: true })
    }
    return this.setState({ animate: false });
  }

  handleSecondAnimation() {
    console.log(window.scrollY)
    if (window.scrollY > 1597) {
      return this.setState({ mistyAnimate: true })
    }
    return this.setState({ mistyAnimate: false });
  }

  render() {
    const { animate, mistyAnimate } = this.state
    return (
      <section className='projects'>
        <button className="anchor" id="projects" />
        <div className='projects-container'>
          <img src={img3} alt="mountains" className={animate ? 'slide' : 'show'} />
          <div className="project-text">
            <h4>Shoreline</h4>
            <p>{posts[0].text}</p>
          </div>
        </div>
        <div className='misty-wrapper'>
          <MistyMountains
            tittle={posts[0].title}
            img={img1}
            text={posts[1].text}
            start={mistyAnimate}
          />
          <MistyMountains
            tittle={posts[1].title}
            img={img2}
            text={posts[1].text}
            start={mistyAnimate}
          />
        </div>
      </section>
    )
  }
}


export default Projects;