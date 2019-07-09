import React from 'react'
import './style.scss'

function Signup(props) {
  return (
    <section className='signup'>
      <a className="anchor" id="contact" href="#contact"> </a>
      <div className='signup-container'>
        <i className="far fa-paper-plane"></i>
        <h4>Subscribe to receive updates!</h4>
      </div>
      <form className="signup-form">
        <input type="email" className='signup-input' placeholder='enter email address...' />
        <button typ='submit'>Subscribe</button>
      </form>
    </section>
  )
};


export default Signup;
