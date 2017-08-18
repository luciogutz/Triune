import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'


class Home extends React.Component {
  render() {
    return(
      <section>
        <Header />
        <section className="three-in-one-container">
          <div className="three-in-one-div">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <h3>
              Responsive Design
            </h3>
          </div>
          <div>

          </div>
          <div>

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
