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


const aboutusImages = {
    aboutUsBanner: "https://github.com/luciogutz/Triune/blob/master/public/assets/aboutUs-banner-image.jpeg?raw=true",
    aboutusBodyImage: "https://github.com/luciogutz/Triune/blob/master/public/assets/Aboutus3.png?raw=true"
}

export default class Aboutus extends React.Component {

  componentDidMount() {
    document.body.scrollTop = 0
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return(
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment About Us Page</title>
          <meta name="description" content="Triune Web Design and Site Management about us page - Content will give you the history and future goals and ambitions of Triune Web Design" />
        </Helmet>
        <a onClick={this.scrollToTop}>
        <div className="header_toTop-div">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div></a>
        <Menu />
        <section title="Triune Web Design About Us Page" className="aboutus-banner">
          <div className="aboutus-banner-overlay">
            <article className="aboutus_banner-text-container">
              <h2>
                ~ Everybody has a story - read ours ~
              </h2>
            </article>
          </div>
        </section>
        <article className="aboutus_body-container">
          <div className="aboutus_body-image-container">
            <img
              className="aboutus_body-image"
              src={aboutusImages.aboutusBodyImage}/>
          </div>
          <div className="aboutus_body-text-container">
            <p> Triune Web Design is a startup created by Lucio R. Gutierrez Jr in May of 2016. With a Front End Engineering certification from The Iron Yard Code Academy, The foundation was layed for this knew venture to take shape. </p>
            <p> <span>Our purpose</span> is a simple one. To provied the Rio Grande Valley with the absolute best client based web designs and services possible. </p>
            <p> We are pumped primed and ready to take on any challenge a client might have. </p>
            <p><span> Our goal </span> </p>
          </div>
        </article>
        <Footer />
      </section>
    )
  }
}
