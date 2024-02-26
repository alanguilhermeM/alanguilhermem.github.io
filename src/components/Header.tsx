import { Component } from 'react';
// import styles from '../styles/header.module.css';

export class Header extends Component {
  renderHeader() {
    const path = window.location.pathname;
    switch (path) {
      case '/tecnologies':
        return (
          <header data-testid="header" className='header'>
              <h2>Guilherme Mansur | Software Developer</h2>
              <nav className='nav_header'>
                <a href='/'>About Me</a>
                <a href='/certificates'>Certificates</a>
                <a href='#projects'>Projects</a>
              </nav>
          </header>
        )

      case '/certificates':
        return (
          <header data-testid="header" className='header'>
              <h2>Guilherme Mansur | Software Developer</h2>
              <nav className='nav_header'>
                <a href='/'>About Me</a>
                <a href='/tecnologies'>Tecnologies</a>
              </nav>
          </header>
        )

      default:
        return (
          <header data-testid="header" className='header'>
              <h2>Guilherme Mansur | Software Developer</h2>
              <nav className='nav_header'>
                <a href='/tecnologies'>Tecnologies</a>
                <a href='#contact'>Contact</a>
                <a href='/certificates'>Certificates</a>
              </nav>
          </header>
        )
    }
  }
  render() {
    return (
      <div>
        {
          this.renderHeader()
        }
      </div>
    );
  }
}
export default Header;