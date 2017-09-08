import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import {Helmet} from 'react-helmet'
import Menu from './Menu'


const portfolioImages = {
  portfolioGraphic: ""
}

export default class Portfolio extends React.Component {


  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment About Us Page</title>
          <meta name="description" content="Triune Web Design and Site Management portfolio page - See our work and image your site better than ever. Triune will redesign, rebuild, and rethink the way your website functions and attract new visitors." />
        </Helmet>
        <a onClick={this.scrollToTop}>
        <div className="header_toTop-div">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div></a>
        <Menu />
        <section className="portfolio_banner-container">

        </section>
        <section className="portfolio_body-container" >

        </section>
        <Footer />
      </section>
    )
  }
}
