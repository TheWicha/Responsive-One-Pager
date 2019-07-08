import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import Header from '../Header'
import About from '../About';
import Projects from '../Projects';
import Signup from '../Signup';
import Contact from '../Contact';

function Main(props) {
  return (
    <div className='main'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Signup />
      <Contact />
    </div>
  )
};


export default Main;
