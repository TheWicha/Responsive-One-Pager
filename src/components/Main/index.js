import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import Header from '../Header'
import About from '../About';
import Projects from '../Projects';
import Signup from '../Signup';

function Main(props) {
  return (
    <div className='main'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Signup />
    </div>
  )
};


export default Main;
