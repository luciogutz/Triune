import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'
import {Helmet} from 'react-helmet'
import Scroll from 'react-scroll'
import Validation from 'react-validation'
import classNames from 'classnames'
import PropTypes from 'prop-types'


let Links      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

export default class Form extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        Name: "",
        Email: "",
        Website: "",
        Message: "",
        Loading: false,
        Errors: {}
    }
  }

  onFormNameChange(e) {
    var formName = e.target.value
    console.log(formName);
    this.setState({
      Name: formName
    })
  }
  onFormEmailChange(e) {
    var formEmail = e.target.value
    this.setState({
      Email: formEmail
    })
  }
  onFormWebsiteChange(e) {
    var formWebsite = e.target.value
    this.setState({
      Website: formWebsite
    })
  }
  onFormMessageChange(e) {
    var formMessage = e.target.value
    this.setState({
      Message: formMessage
    })
  }


  render() {
    return(
      <section>
        <Validation.components.Form>
          <input
            onChange={this.onFormNameChange.bind(this)}
            type="text"
            placeholder="NAME" />
          <input
            onChange={this.onFormEmailChange.bind(this)}
            type="text"
            placeholder="EMAIL" />
          <input
            onChange={this.onFormWebsiteChange.bind(this)}
            type="text"
            placeholder="WEBSITE" />
          <input
            onChange={this.onFormMessageChange.bind(this)}
            type="text"
            placeholder="MESSAGE" />
          <input type="submit"/>
        </Validation.components.Form>
      </section>
    )
  }
}
