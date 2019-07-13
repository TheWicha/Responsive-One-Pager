import React from 'react'
import './style.scss'

function Projects(props) {
  const { img, start, tittle, text } = props
  return (
    <div className="misty">
      <img src={img} alt="mountains"></img>
      <div className={start ? 'misty-text mist' : 'misty-text' }>
        <h4>{tittle}</h4>
        <p>{text}</p>
        <hr className={start ? 'slide-up' : 'show'}/>
      </div>

    </div>
  )
};


export default Projects;