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
      <section className="webDesign_wrapper">
        <Helmet>
          <title> Triune Web Design and site Managment About Us Page</title>
          <meta name="description" content="Triune Web Design and Site Management - Web Design Page - Triune can take your existing site to the next level. Weather its a redesign, or a brand new site, Triune will create a user friendly and fuctional design." />
        </Helmet>
        <a onClick={this.scrollToTop}>
        <div className="header_toTop-div">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div></a>
        <Menu />
        <section className="WebDesign_banner">
          <div>
            <h1>
              Website Design
            </h1>
          </div>
        </section>
        <section className="webDesign_body-container">
          <article className="webDesign_body-text">
            <h2>
              Our four step creative process
            </h2>
          </article>
          <article className="webDesign_agile-container">
            <div className="webDesign-agile-div1">
              <section className="webDesign-agile-div1-overlay">
                <h3 className="webDesign-agile-title-1"> 1. Planning & Requirements </h3>
                <div>
                </div>
              </section>
            </div>
            <div className="webDesign-agile-div2">
              <section className="webDesign-agile-div2-overlay">
                  <h3 className="webDesign-agile-title-2"> 2. Design & Layout </h3>
                <div>
                </div>
              </section>
            </div>
            <div className="webDesign-agile-div3">
              <section className="webDesign-agile-div3-overlay">
                <h3 className="webDesign-agile-title-3">
                3. Deployment & Evaluation  </h3>
                <div>
                </div>
              </section>
            </div>
            <div className="webDesign-agile-div4">
              <section className="webDesign-agile-div4-overlay">
                  <h3 className="webDesign-agile-title-4"> 4. Development </h3>
                <div>
                </div>
              </section>
            </div>
          </article>
          <article className="webDesign_content-container">
            <p>
              Building your online brand is vital to your organization or business, and we take an Agile approach when it comes to our Web Design Services.
            </p>
            <div>
              <h3> 1. Planning and Requirements </h3>
            </div>  
          </article>
        </section>
        <Footer />
      </section>
    )
  }
}
