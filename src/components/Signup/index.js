import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Signup(props) {
  return (
    <section className='signup'>
      <button className="anchor" id="contact" />
      <div className='signup-container'>
      <FontAwesomeIcon icon={faPaperPlane } />
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
