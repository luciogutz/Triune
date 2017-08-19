import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Menu from './Menu'


const images = {
    menuLogoImgByLG: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo-2.png?raw=true",
    menuLogoImg: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo.png?raw=true"
}


class Header extends React.Component {
  render() {
    return(
      <section>
        <section className="menu-container">
          <div className="menu">
            <Link to='/'>
              <img className="menu-logoImg" src={images.menuLogoImg} />
            </Link>
            <Menu />
          </div>
        </section>
        <section id="headerBanner" className="header_container">
          <div className="header_container-overlay">
            <div>
              <h1 className="header_sloagan">
                Your site should reflect who you are.
              </h1>
              <h2 className="header_slogan-subLine">
                Lets get started
              </h2>
            </div>
            <div className="header_button">
                <i className="fa fa-angle-double-down" aria-hidden="true">
                </i>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Header
