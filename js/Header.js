import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Menu from './Menu'


const images = {
    menuLogoImg: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo.png?raw=true"
}


class Header extends React.Component {
  render() {
    return(
      <section>
        <section id="headerBanner" className="header_container">
          <div className="header_container-overlay">  
            <div className="menu-topBar">
              <p className="menu-topBar-quote">
                “It’s not about ideas. It’s about making ideas happen.” —Scott Belsky
              </p>
            </div>
            <div className="menu">
              <Link to='/'>
                <img className="menu-logoImg" src={images.menuLogoImg} />
              </Link>
              <Menu />
            </div>
            <div>
              <h1 className="header_sloagan">
                Your site should reflect who you are.
              </h1>
              <h2 className="header_slogan-subLine">
                We can help.
              </h2>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Header
