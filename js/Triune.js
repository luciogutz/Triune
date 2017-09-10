import React from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import Portfolio from './Portfolio'
import HeavenlySplendor from './HeavenlySplendor'
import Contact from './Contact'



class Triune extends React.Component {
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
        </Switch>
      </main>
    )
  }
}

export default Triune
