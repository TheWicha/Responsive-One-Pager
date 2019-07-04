import React, { Component } from 'react'
import './style.scss'
import links from './links'



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      changeStyle: false,
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    
  }

  handleDropdown() {
    this.setState({ active: !this.state.active })
  }

  handleScroll() {
    if (window.scrollY > 53) {
      return this.setState({ changeStyle: true })
    }
    return this.setState({ changeStyle: false });
  }
    



  render() {
    return (
      <nav className={this.state.changeStyle ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
          <div className="logo-container">
            <div className='logo'><a href="/">Port Project</a></div>
            <button className='dropbtn' onClick={this.handleDropdown}>Menu <i className="fas fa-bars"></i></button>
          </div>
          <div className={this.state.active ? 'links active' : 'links'}>
            {links.map((link, i) => <li key={i}><a href={link.href}>{link.name}</a></li>)}
          </div>
        </div>
      </nav>
    )
  }
}



export default Navbar;
