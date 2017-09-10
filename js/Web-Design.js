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

export default class WebDesign extends React.Component {

  componentDidMount () {
    document.body.scrollTop = 0
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render(){
    return (
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment About Us Page</title>
          <meta name="description" content="Triune Web Design and Site Management - Web Design Page - Triune can take your existing site to the next level. Weather its a redesign, or a brand new site, Triune will create a user friendly and fuctional design." />
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
