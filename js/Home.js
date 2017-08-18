import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'


class Home extends React.Component {
  render() {
    return(
      <section>
        <Header />
        <section className="FP-1st-section">
          <div className="FP-1st-section-overlay">
            <div>
              <h1 className="FP-1st-title"> Responsive Design </h1>
            </div>
            <div className="FP-1st-resp-content-container">
              <div className="FP-1st-responsive_text-div">
                <p>
                  In the morning people use their phones, in the afternoon their desktop, and at night their tablet. Your site needs to be ready for anything, and we can make that happen.
                </p>
              </div>
              <div className="FP-1st-responsiveImage">
                <img src="https://github.com/luciogutz/Triune/blob/master/public/assets/responsiveImage.png?raw=true" />
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
