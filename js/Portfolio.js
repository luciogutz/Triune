import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import {Helmet} from 'react-helmet'
import Menu from './Menu'
import Scroll from 'react-scroll'
import classNames from 'classnames'
import PropTypes from 'prop-types'


let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;



const portfolioImages = {
  portfolioGraphic: "https://github.com/luciogutz/Triune/blob/master/public/assets/Portfolio.png?raw=true",
  heavenlySplendor: "https://github.com/luciogutz/Triune/blob/master/public/assets/heavenlysplendor.jpg?raw=true"
}

export default class Portfolio extends React.Component {

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
          </div>
        </a>
        <Menu />
        <section className="portfolio_banner-container">
          <div className="portfolio_title-container">
            <h1> ~ Transform your site from good to awesome ~ </h1>
          </div>
        </section>
        <section className="portfolio_body-container" >
          <div className="portfolio_body-image-container">
            <img
              className="portfolio_body-image"
              src={portfolioImages.portfolioGraphic}/>
          </div>
          <article className="portfolio_heavenlySplendor-container">
            <div className="portfolio_heavenlySplendor-overlay">
              <h2> Heavenly Splendor Ministries </h2>
              <Link
                className="portfolio_HS-Link" to="/triune-heavenly-splendor-ministries"> <i className="fa fa-paper-plane-o" aria-hidden="true"></i> </Link>
            </div>
          </article>
        </section>
        <Footer />
      </section>
    )
  }
}
