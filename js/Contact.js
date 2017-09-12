import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'
import {Helmet} from 'react-helmet'
import Scroll from 'react-scroll'
import Form from './Form'
import classNames from 'classnames'
import PropTypes from 'prop-types'


let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

export default class Contact extends React.Component {

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
          <title> Triune Web Design and site Managment Contact Page</title>
          <meta name="description" content="Triune Web Design and Site Management contact page - We will be happy to hear from you. Need a redesign or a brand new site, reach out to us and we will give you a quote and our expert advice." />
        </Helmet>
        <a onClick={this.scrollToTop}>
        <div className="header_toTop-div">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div></a>
        <Menu />
        <section>

        </section>
        <Footer />
        <Form />
      </section>
    )
  }
}
