import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'
import {Helmet} from 'react-helmet'

const aboutusImages = {
    aboutUsBanner: "https://github.com/luciogutz/Triune/blob/master/public/assets/aboutUs-banner-image.jpeg?raw=true"
}

export default class Aboutus extends React.Component {
  render() {
    return(
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment About Us Page</title>
          <meta name="description" content="Triune Web Design and Site Management about us page - Content will give you the history and future goals and ambitions of Triune Web Design" />
        </Helmet>
        <Menu />
        <section title="Triune Web Design About Us Page" className="aboutus-banner">
          <div className="aboutus-banner-overlay">
            <article className="aboutus_banner-text-container">
              <h2>
                ~ Everybody has a story - Read ours ~
              </h2>
            </article>
          </div>
        </section>
        <article className="aboutus_body-container">
          <div>
            <p>  </p>
          </div>
        </article>
        <Footer />
      </section>
    )
  }
}
