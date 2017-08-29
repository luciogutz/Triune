import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'

export default class Portfolio extends React.Component {
  render() {
    return (
      <section>
        <Menu />
        <Footer />
      </section>
    )
  }
}
