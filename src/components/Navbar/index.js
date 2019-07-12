import React, { Component } from 'react'
import './style.scss'
import links from './links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      changeStyle: false,
      newStyle: false,
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
    console.log(window.scrollY)
    if (window.scrollY >= 0) {
      return this.setState({ changeStyle: true })
    }
    return this.setState({ changeStyle: false });
  }


  render() {
    const { changeStyle, active } = this.state

    return (
      <nav className={changeStyle ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
          <div className="logo-container">
            <div className='logo'><a href="/">Port Project</a></div>
            <button className='dropbtn' onClick={this.handleDropdown}>Menu <FontAwesomeIcon icon={faBars} /></button>
          </div>
          <div className={active ? 'links active' : 'links'}>
            {links.map((link, i) =>
              <li
                onClick={this.handleDropdown}
                key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>)}
          </div>
        </div>
      </nav>
    )
  }
}



export default Navbar;
