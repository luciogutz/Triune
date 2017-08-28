import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Home from './Home'


class Menu extends React.Component {
  render() {

    const pages = ['HOME', 'ABOUT US', 'PICS', 'BIO', 'ART'];
    const navLinks = pages.map((page, i) => {
      return (
        <Link to="/" key={i} className="menuLinks" href={'/' + page}>{page}</Link>
      )
    })

    return (
      <section className="menu_LinkContainer">
        <nav>{navLinks}</nav>
      </section>
    )
  }
}

export default Menu
