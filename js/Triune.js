import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import Portfolio from './Portfolio'
import HeavenlySplendor from './HeavenlySplendor'
import Contact from './Contact'
import WebDesign from './Web-Design'
import SEO from './SEO'
import SiteManagement from './Site-Management'
import classNames from 'classnames'
import PropTypes from 'prop-types'




class Triune extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route
            exact path='/'
            component={Home}/>
          <Route
            path="/triune-aboutus" component={AboutUs} />
          <Route
            path="/triune-portfolio" component={Portfolio} />
          <Route
            path="/triune-heavenly-splendor-ministries"
            component={HeavenlySplendor} />
          <Route
            path="/triune-contact" component={Contact}/>
          <Route
            path="/triune-web-design"
            component={WebDesign}/>
          <Route
            path="/triune-SEO"
            component={SEO} />
          <Route
            path="/triune-site-management"
            component={SiteManagement} />
        </Switch>
      </main>
    )
  }
}

export default Triune
