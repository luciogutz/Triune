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
              <h2 className="resp-title"> Responsive Design </h2>
            </div>
            <div className="resp-content-container">
              <div className="resp_text-div">
                <h3>
                  Why Responsive Web Design
                </h3>
                <p>
                  1. Recommended By Google
                </p>
                <p>
                  2. One Website, Many Devices
                </p>
                <p>
                  3. Easier to Manage
                </p>
                <Link to="/" className="resp-page-link"> READ MORE </Link>
              </div>
              <div className="resp-Image hvr-grow">
                <img src={homeImages.responsiveImage} />
              </div>
            </div>
            <div className="resp-device-list">
              <p> Desktop </p>
              <p> Tablet </p>
              <p> Phone </p>
              <p> IOS </p>
              <p> Android </p>
              <p> Kindle </p>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Home
