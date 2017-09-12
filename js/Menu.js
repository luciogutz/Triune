import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const images = {
    menuLogoImgByLG: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo-2.png?raw=true",
    menuLogoImg: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo.png?raw=true"
}


export default class Menu extends React.Component {

  render() {

    return (
      <section className="menu-container">
        <div className="menu">
          <Link to='/'>
            <img className="menu-logoImg" title="Triune web design and site managment" src={images.menuLogoImg} />
          </Link>
          <section className="menu_LinkContainer">
            <nav className="menu_nav">
              <Link
                className="menuLinks"
                to="/">
                HOME
              </Link>
              <Link
                className="menuLinks"
                to="/triune-aboutus">
                ABOUT US
              </Link>
              <Link
                className="menuLinks"
                to="/triune-portfolio">
                PORTFOLIO
              </Link>
              <div className="menuItem_container">
                <Link
                  className="menuLinks"
                  to="/triune-services">
                  SERVICES
                </Link>
                <div className="menu_service-dropdown">
                  <Link
                    to="/triune-web-design"> Website Design
                  </Link>
                  <Link
                    to="/triune-SEO"> Search Engine Optimization
                  </Link>
                  <Link
                    to="/triune-site-management"> Site Management
                  </Link>
                </div>
              </div>
              <Link
                className="menuLinks"
                to="/triune-contact">
                CONTACT
              </Link>
            </nav>
          </section>
        </div>
      </section>

    )
  }
}
