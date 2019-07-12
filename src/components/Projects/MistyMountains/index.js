import React from 'react'
import './style.scss'

function Projects(props) {
  return (
    <div className="misty">
      <img src={props.img} alt="mountains"></img>
      <div className="misty-text">
      <h4>{props.tittle}</h4>
      <p>{props.text}</p>
      <hr />
      </div>
      
    </div>
  )
};


export default Projects;