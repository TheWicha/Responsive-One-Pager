import React, { Component } from 'react'
import './style.scss'
import links from './links'



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
    this.handleStyleChange = this.handleStyleChange.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('scroll', this.handleStyleChange, true);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('scroll', this.handleStyleChange, true);
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

  handleStyleChange() {
    if (window.scrollY > 970 && window.scrollY < 1645) {
      return this.setState({ newStyle: true })
    }
    return this.setState({ newStyle: false });
  }


  render() {
    const { changeStyle, active, newStyle } = this.state

    return (
      <nav className={changeStyle ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
          <div className="logo-container">
            <div className='logo'><a href="/">Port Project</a></div>
            <button className='dropbtn' onClick={this.handleDropdown}>Menu <i className="fas fa-bars"></i></button>
          </div>
          <div className={active ? 'links active' : 'links'}>
            {links.map((link, i) =>
              <li
                className={newStyle && i === 0 ? 'scrolled-li' : ''}
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
