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
              <h1 className="FP-1st-title"> Three in One Service </h1>
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
