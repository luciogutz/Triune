import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import Scroll from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import classNames from 'classnames'
import PropTypes from 'prop-types'



let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


const homeImages = {
    responsiveDesignIcon: "https://github.com/luciogutz/Triune/blob/master/public/assets/responsive-design-icon.png?raw=true",
    responsiveImage: "https://github.com/luciogutz/Triune/blob/master/public/assets/responsiveImage.png?raw=true",
    seoIcon: "https://github.com/luciogutz/Triune/blob/master/public/assets/SEO-icon-3.png?raw=true",
    siteMang: "https://github.com/luciogutz/Triune/blob/master/public/assets/site-management.png?raw=true"
}


export default class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment </title>
          <meta name="description" content="Triune Web Design and Site Management will take care of your website needs. From Responsive design, to SEO configurations to maintaining your site for you with updates and changes you may need at any time" />
        </Helmet>
        <Header />
        <section id="3in1"  className="three-in-one-container">
            <div name="test1" className="three-in-one-div">
              <img title="Triune responsive design" src={homeImages.responsiveDesignIcon} />
              <h3>
                Responsive Web Design
              </h3>
            </div>
            <div name="test1" className="three-in-one-div">
              <img title="Triune SEO strategy" src={homeImages.seoIcon} />
              <h3>
                <span>S</span>earch <span>E</span>ngine <span>O</span>ptimization
              </h3>
            </div>
            <div name="test1" className="three-in-one-div">
              <img title="Triune website managment" src={homeImages.siteMang} />
              <h3>
                Site Management
              </h3>
            </div>
        </section>
        <section className="resp-section">
            <div>
              <h2 className="resp-title"> Responsive Web Design </h2>
            </div>

              <div className="resp-content-container">
                <ScrollAnimation
                  animateOnce="true"
                  animateIn="fadeIn"
                  duration="1">
                <section className="resp_tile-container">
                  <div className="resp_text-div">
                    <h3>
                      1. Recommended By Google
                    </h3>
                    <p>
                      With 67 percent search market share, when Google speaks, search marketers listen. Google states that responsive web design is its recommended mobile configuration, and even goes so far as to refer to responsive web design as the industry best practice.
                    </p>
                  </div>
                  <div className="resp_text-div">
                    <h3>
                      2. One Website, Many Devices
                    </h3>
                    <p>
                      Provides a great user-experience across many devices and screen sizes. This is an important characteristic, since it is impossible to anticipate all the devices and screen sizes searchers will use to access your site.
                    </p>
                  </div>
                  <div className="resp_text-div">
                    <h3>
                      3. Easier to Manage
                    </h3>
                    <p>
                      Having a separate desktop and mobile site requires having separate SEO campaigns. Managing one site and one SEO campaign is far easier than managing two sites and two SEO campaigns. This is a key advantage a responsive website has over a separate mobile site.
                    </p>
                  </div>
                </section>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  duration="1"
                  animateOnce="true">
                  <div className="resp-device-list">
                    <p> Desktop </p>
                    <p> Tablet </p>
                    <p> Phone </p>
                    <p> IOS </p>
                    <p> Android </p>
                    <p> Kindle </p>
                  </div>
                  <Link to="/triune-web-design" className="resp-read-more hvr-text-fade"> Read More </Link>
                </ScrollAnimation>
              </div>
          </section>
        <section className="SEO_section">
          <article className="SEO_section-overlay">
            <div className="SEO-title-container">
              <h3>
                SEO / SEARCH
              </h3>
            </div>
            <ScrollAnimation
              animateOnce="true"
              animateIn="fadeIn"
              duration="1">
              <div className="SEO-content-container">
                <p>
                  Triune will build your site to be relavent to what your purpose and goals are.
                </p>
                <p>
                  Nothing beats a well thought out content rich website when it comes to SEO.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce="true"
              duration="1">
              <div className="SEO-content-list-container">
                <div>
                  <p>Relavent Content</p>
                  <p> Well Placed and Content Rich Images </p>
                  <p> Relavent Links and References </p>
                </div>
                <div>
                  <p> Clear and Concise Language </p>
                  <p> Industry Best Standards for HTML Layout </p>
                  <p> Unique and Relavent Page Titles </p>
                </div>
              </div>
              <Link to="/triune-SEO" className="seo-read-more hvr-text-fade"> Read More </Link>
            </ScrollAnimation>
          </article>
        </section>
        <section className="management_section">
          <article className="management_overlay">
            <div className="management-title-container">
              <h3>
                Site Management
              </h3>
            </div>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce="true"
              duration="1">
              <div className="management-content-container">
                <p>
                  We understand running a business is a huge task. TRIUNE will take some of that burden off by managing your site.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce="true"
              duration="1">
              <div className="management_tile-container">
                <p> Content Editing </p>
                <p> Software Updates </p>
                <p> Layout and Design Changes </p>
                <p> Adding or Removing Pages </p>
                <p> SEO Modifications </p>
              </div>
              <Link to="/triune-site-management" className="seo-read-more hvr-text-fade"> Read More </Link>
            </ScrollAnimation>
          </article>
        </section>
        <section className="frontPage_customer-note">
          <article className="frontpage_customer-content">
            <div>
              <p> Have questions about your site </p>
              <p> Need some help with upgrades </p>
              <p> Looking for someone to help manage your site </p>
              <p> Need a fresh new look </p>
              <p> Contact us for more information </p>
            </div>
            <div>
              <img src={homeImages.responsiveImage}/>
            </div>
            <Link to="#" className="frontpage_contact-Link hvr-text-fade"> Contact </Link>
          </article>
        </section>
        <Footer />
      </section>
    )
  }
}
