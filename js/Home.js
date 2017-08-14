import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Header from './Header'


class Home extends React.Component {
  render() {
    return(
      <section>
        <Header />
      </section>
    )
  }
}

export default Home
