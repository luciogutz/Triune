import React from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'



class Triune extends React.Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    )
  }
}

export default Triune
