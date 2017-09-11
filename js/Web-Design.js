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
    window.scrollTo(0, 0)
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
              Website Design - Our Four Step Process
            </h1>
          </div>
        </section>
        <section className="webDesign_body-container">
          <article className="webDesign_body-text">
            <h2>
              Agile Methodology
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
                4. Deployment & Evaluation  </h3>
                <div>
                </div>
              </section>
            </div>
            <div className="webDesign-agile-div4">
              <section className="webDesign-agile-div4-overlay">
                  <h3 className="webDesign-agile-title-4"> 3. Development </h3>
                <div>
                </div>
              </section>
            </div>
          </article>
          <article className="webDesign_content-container">
            <p>
              Building your online brand is vital to your organization or business, and we take an Agile approach when it comes to our Web Design Services.
            </p>
            <div className="webDesign_content-div-stage-1">
              <h3> 1. Planning & Requirements </h3>
              <p>
                This first stage is where we become students and learn the ins and outs of your business or organization. We take the time to understand your needs and what you would consider absolute must haves to be included in the final product.
              </p>
            </div>
            <div className="webDesign_content-div-stage-2">
              <h3> 2. Design & Layout </h3>
              <p>
                During the second stage we begin to create the best possible layout that will enhance the functionality and usability of your website. Our stratigy will be based on your requirements and needs. We will also consider animations and other avenues to create a great user experience.
              </p>
            </div>
            <div className="webDesign_content-div-stage-3">
              <h3> 3. Development </h3>
              <p>
                Stage three is where we roll up our sleeves and dive right in to the code. Using the latest in HTML5 and CSS3, we will begin to cunstruct your site with Search Engine Optimization, device responsiveness, and cross browser compatability in mind.
              </p>
            </div>
            <div className="webDesign_content-div-stage-4">
              <h3> 3. Deployment and Evaluation </h3>
              <p>
                Stage four is our launch and monitor faze. Just because things have gone online doesnt mean we're done. We want to stay with you until you are absolutly satisfied with the product. The beautiful thing about are Agile process is that even after deployment, we have a system in place to continue planning, designing and developing until everything has met the standards we set out to accomplish.
              </p>
            </div>
          </article>
        </section>
        <Footer />
      </section>
    )
  }
}
