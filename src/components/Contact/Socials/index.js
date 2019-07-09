import React from 'react'
import './style.scss'
import icons from './icons'


function Socials(props) {
  return (
<div className="socials">
  {icons.map((icon, i) => (
    <a key={i} href={icon.href} target="_blank" rel="noopener noreferrer">
      <i className={icon.name}></i>
    </a>
  ))}
</div>
  )
};


export default Socials;
