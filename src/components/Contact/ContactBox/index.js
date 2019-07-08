import React from 'react'
import './style.scss'

function ContactBox(props) {
  return (
    <div className='contact-box'>
      <i class={props.icon}></i>
      <h4>{props.type}</h4>
      <hr />
      <p>{props.text}</p>
    </div>
  )
};


export default ContactBox;
