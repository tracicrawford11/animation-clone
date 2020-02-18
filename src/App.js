import React from 'react'
import './reset.css'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      menuIsOpen: false
    }
  }
  handleClick = () => {
    this.setState ({menuIsOpen: !this.state.menuIsOpen})
  }
  render () {
    return (
      <div>
        <nav>
          <h2 className='start'>Start Bootstrap</h2>
          <ul className="nav-links">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>

          <section className='menbtn' onClick={this.handleClick}>
            <h3>MENU</h3>
            <div className='bars'>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </section>
        </nav>
        <menu className={this.state.menuIsOpen === true ? "menu-open" : ""}>
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </menu>
      </div>
    )
  }
}

export default App;
