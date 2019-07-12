import React from 'react'
import './style.scss'

function Header(props) {
  return (
    <header className='header'>
      <button className="anchor" id="header" />
      <div className='header-container'>
        <div className='header-center'>
          <h1>Port Project</h1>
          <h2>A cool, responsive one page created by Daniel Wisniewski</h2>
          <a href="#about">Let's Go!</a>
        </div>
      </div>
    </header>
  )
}



export default Header;