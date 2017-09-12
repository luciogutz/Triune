import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'
import {Helmet} from 'react-helmet'
import Scroll from 'react-scroll'
import classNames from 'classnames'
import PropTypes from 'prop-types'


let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


export default class SEO extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render(){
    return (
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment SEO Page</title>
          <meta name="description" content="Triune Web Design and Site Management - SEO Page - Triune will design your wite with SEO friendly code and content that targets your brand and goals." />
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
