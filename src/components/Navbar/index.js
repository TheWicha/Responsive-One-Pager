import React, { Component } from 'react'
import sass from 'node-sass'
import './style.scss'
import links from './links'



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    const currentState = this.state.active;
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='container'>
          <div className="logo-container">
            <div className='logo'>Port Project</div>
            <button className='dropbtn' onClick={this.handleDropdown}>Menu</button>
          </div>
          <div className={this.state.active ? 'active links-container' : 'links-container'}>
            <div className={this.state.active ? 'active links' : 'links'}>{links.map((link, i) => <li key={i}><a href={link.href}>{link.name}</a></li>)}</div>
          </div>
        </div>
      </nav>
    )
  }
}



export default Navbar;