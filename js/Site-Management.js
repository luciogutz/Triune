import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'
import {Helmet} from 'react-helmet'
import Scroll from 'react-scroll'

let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

export default class SiteManagement extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return(
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment Site Management Page</title>
          <meta name="description" content="Triune Web Design and Site Management - Site Management Page - Triune will take your site and keep things looking good and up to date. Content changes, or plugin updates, we take that on so you dont have to." />
        </Helmet>
        <a onClick={this.scrollToTop}>
        <div className="header_toTop-div">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div></a>
        <Menu />
        <Footer />
      </section>
    )
  }
}
