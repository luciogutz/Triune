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

const hsImage = {
    hsMainImage: "https://github.com/luciogutz/Triune/blob/master/public/assets/heavenlysplendor.jpg?raw=true"
}

export default class HeavenlySplendor extends React.Component {
  
  componentDidMount() {
    document.body.scrollTop = 0
  }

  render() {
    return (
      <section className="port-wrapper">
        <Menu />
          <div className="port-title-container">
            <h1> Heavenly Splendor Ministries </h1>
          </div>
          <section className="port_body-container">
            <img src={hsImage.hsMainImage}/>
            <article className="port_body-content-container">
              <div className="port_body-text-container">
                <p>
                  Heavenly Splendor Ministries came to us wanting a fresh updated website. They were looking for modern touches, such as full screen content, larger fonts, updated images and most importantly they needed the site to have both English and Spanish capabilities. With a growing congregation and the need for providing a great visitor experience for all members of both the English and Spanish churches, we created exactly what they requested.
                </p>
                <p>
                  Their new website provides the visitor with choosing their preferred language, and allows each page the option to be translated with ease.
                </p>
                <p>
                  Through collaboration and communication, we got HS-Ministries brand new site up and running with some great new features.
                </p>
                <div className="port_body-features-container">
                  <ul>
                    <li> Language Translation </li>
                    <li> CSS Animations </li>
                    <li> Contact Forms </li>
                    <li> HTML5 </li>
                    <li> IOS/Android Friendly </li>
                    <li> Device Responsive </li>
                    <li> Cross Brower Compatibility </li>
                    <li> Custom Design </li>
                    <li> Announcment Slider </li>
                  </ul>
                </div>
                <a
                  target="_blank"
                  className="port_website-link" href="http://heavenlysplendor.org/"> Visit Site </a>
              </div>
            </article>
          </section>
        <Footer />
      </section>
    )
  }
}
