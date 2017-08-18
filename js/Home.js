import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'


const homeImages = {
    responsiveDesignIcon: "https://github.com/luciogutz/Triune/blob/master/public/assets/responsive-design-icon.png?raw=true",
    responsiveImage: "https://github.com/luciogutz/Triune/blob/master/public/assets/responsiveImage.png?raw=true",
    seoIcon: "https://github.com/luciogutz/Triune/blob/master/public/assets/SEO-icon-3.png?raw=true"
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
            <img src={homeImages.responsiveDesignIcon} />
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
                <p>
                  In the morning people use their phones, in the afternoon their desktop, and at night their tablet. Your site needs to be ready for anything, and we can make that happen.
                </p>
              </div>
              <div className="resp-Image">
                <img src={homeImages.responsiveImage} />
              </div>
            </div>
          </div>
          <div>

          </div>
        </section>
      </section>
    )
  }
}

export default Home
