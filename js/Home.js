import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'



const homeImages = {
    responsiveDesignIcon: "https://github.com/luciogutz/Triune/blob/master/public/assets/responsive-design-icon.png?raw=true",
    responsiveImage: "https://github.com/luciogutz/Triune/blob/master/public/assets/responsiveImage.png?raw=true",
    seoIcon: "https://github.com/luciogutz/Triune/blob/master/public/assets/SEO-icon-3.png?raw=true",
    siteMang: "https://github.com/luciogutz/Triune/blob/master/public/assets/site-management.png?raw=true"
}

function handleClick(e) {

}



class Home extends React.Component {
  render() {
    return(
      <section>
        <Helmet>
          <title> Triune Web Design and site Managment </title>
          <meta name="description" content="Triune Web Design and Site Management will take care of your website needs. From Responsive design, to SEO configurations to maintaining your site for you with updates and changes you may need at any time" />
        </Helmet>
        <Header />
        <section className="three-in-one-container">
          <div className="three-in-one-div">
            <img title="Triune responsive design" src={homeImages.responsiveDesignIcon} />
            <h3>
              Responsive Design
            </h3>
          </div>
          <div className="three-in-one-div">
            <img title="Triune SEO strategy" src={homeImages.seoIcon} />
            <h3>
              <span>S</span>earch <span>E</span>ngine <span>O</span>ptimization
            </h3>
          </div>
          <div className="three-in-one-div">
            <img title="Triune website managment" src={homeImages.siteMang} />
            <h3>
              Site Managment
            </h3>
          </div>
        </section>
        <section className="resp-section">
          <article className="resp-section-overlay">
            <div>
              <h2 className="resp-title"> Why Responsive Design </h2>
            </div>
            <div className="resp-content-container">
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
              <div className="resp-device-list">
                <p> Desktop </p>
                <p> Tablet </p>
                <p> Phone </p>
                <p> IOS </p>
                <p> Android </p>
                <p> Kindle </p>
              </div>
            </div>
          </article>
        </section>
        <section className="SEO_section">
          <article className="SEO_section-overlay">
            <div className="SEO-title-container">
              <h3>
                SEO / SEARCH
              </h3>
            </div>
            <div className="SEO-content-container">
              <p className="p1">
                Triune will build your site to be relavent to what your purpose and goals are.
              </p>
              <p className="p2">
                Nothing beats a well thought out content rich website when it comes to SEO.
              </p>
            </div>
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
          </article>
        </section>
        <section className="Managment_section">
          <article>

          </article>
        </section>
        <Footer />
      </section>
    )
  }
}

export default Home
