import React, { Component } from 'react'
import $ from "jquery";
import './style.scss'
import Navbar from '../Navbar'
import Header from '../Header'
import About from '../About';
import Projects from '../Projects';
import Signup from '../Signup';
import Contact from '../Contact';
import Footer from '../Footer';

class Main extends Component {

  componentDidMount() {
    $(document).ready(function () {
      $('a[href^="#"]').on('click', function () {
        let target = this.hash;
        let $target = $(target);
        $('html, body').animate({
          'scrollTop': $target.offset().top
        }, 700, 'swing');
      });

    });
  };

  render() {
    return (
      <div className='main'>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Signup />
        <Contact />
        <Footer />
      </div>)
  }
}


export default Main;
