import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'


export default class Menu extends React.Component {
  render() {

    const images = {
        menuLogoImgByLG: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo-2.png?raw=true",
        menuLogoImg: "https://github.com/luciogutz/Triune/blob/master/public/assets/Triune-logo.png?raw=true"
    }

    // const pages = ['HOME', 'ABOUT US', 'PICS', 'BIO', 'ART'];
    // const navLinks = pages.map((page, i) => {
    //   return (
    //     <Link to={'/' + page} key={i} className="menuLinks">{page}</Link>
    //   )
    // })

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
              <Link
                className="menuLinks"
                to="/contact">
                CONTACT
              </Link>
            </nav>
          </section>
        </div>
      </section>

    )
  }
}
