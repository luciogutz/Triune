import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'



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
        <Header />
        <section className="three-in-one-container">
          <div className="three-in-one-div">
            <img src={homeImages.responsiveDesignIcon} />
            <h3>
              Responsive Design
            </h3>
          </div>
          <div className="three-in-one-div">
            <img src={homeImages.seoIcon} />
            <h3>
              <span>S</span>earch <span>E</span>ngine <span>O</span>ptimization
            </h3>
          </div>
          <div className="three-in-one-div">
            <img src={homeImages.siteMang} />
            <h3>
              Site Managment
            </h3>
          </div>
        </section>
        <section className="resp-section">
          <div className="resp-section-overlay">
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
          </div>
        </section>
      </section>
    )
  }
}

export default Home
