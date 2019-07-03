import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import Header from '../Header'
import About from '../About';

function Main(props) {
  return (
    <div className='main'>
        <Navbar />
        <Header />
        <About />
    </div>
  )
};


export default Main;