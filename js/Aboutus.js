import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'

const aboutusImages = {
    aboutUsBanner: ""
}

class Aboutus extends React.Component {
  render() {
    return(
      <section>
        <Menu />
        <section className="aboutus-banner">
          <img src={aboutusImages.aboutUsBanner} />
        </section>

        <Footer />
      </section>
    )
  }
}

export default Aboutus
