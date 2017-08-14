import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'



class Menu extends React.Component {
  render() {

    const pages = ['home', 'blog', 'pics', 'bio', 'art'];
    const navLinks = pages.map((page, i) => {
      return (
        <a key={i} className="menuLinks" href={'/' + page}>{page}</a>
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
