import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Menu from './Menu'
import Scroll from 'react-scroll'

let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


export default class Header extends React.Component {
  scrollToTop() {
    scroll.scrollToTop();
  }


  render() {
    return(
      <section>
        <a onClick={this.scrollToTop}>
        <div className="header_toTop-div">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div></a>
        <Menu />
        <section id="headerBanner" className="header_container">
          <div className="header_container-overlay">
            <div>
              <h1 className="header_sloagan">
                Triune will create your site to reflect who you are.
              </h1>
              <h2 className="header_slogan-subLine hide">
                Lets get started
              </h2>
            </div>
            <div className="header_button hvr-text-fade">
                <i className="fa fa-angle-double-down" aria-hidden="true">
                </i>
            </div>
          </div>
        </section>
      </section>
    )
  }
}
