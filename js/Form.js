import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'
import Footer from "./Footer"
import Menu from './Menu'
import {Helmet} from 'react-helmet'
import Scroll from 'react-scroll'
import Validation from 'react-validation'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ajax } from 'jquery'


let Links     = Scroll.Link;
let Element   = Scroll.Element;
let Events    = Scroll.Events;
let scroll    = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


export default class Form extends Component {


  constructor(props) {
    super(props);
    this.state = {
      Form: {
        Name: "",
        Email: "",
        Website: "",
        Subject: "",
        Message: ""
      }
    }
    this.onFormChange = this.onFormChange.bind(this)
  }

  onFormChange(e) {
    var formName = this._name.value
    var formEmail = this._email.value
    var formWebsite = this._website.value
    var formSubject = this._subject.value
    var formMessage = this._message.value
    this.setState({
      Form: {
        Name: formName,
        Email: formEmail,
        Website: formWebsite,
        Subject: formSubject,
        Message: formMessage
      }
    })
  }


  onFormSubmit(e){
    e.preventDefault();
    console.log(thi);
  }

  render() {
    const formInputs = this.state
    console.log(formInputs);
    return(
      <section>
        <Validation.components.Form
          onChange={this.onFormChange}>
          <input
          ref={input => this._name = input}
            name="Name"
            type="text"
            placeholder="NAME" />
          <input
            ref={input => this._email = input}
            name="Email"
            type="text"
            placeholder="EMAIL" />
          <input
            ref={input => this._website = input}
            name="Website"
            type="text"
            placeholder="WEBSITE" />
          <input
            ref={input => this._subject = input}
            name="Website"
            type="text"
            placeholder="SUBJECT" />
          <textarea
            ref={input => this._message = input}
            name="Message"
            type="text"
            placeholder="MESSAGE" />
          <input onSubmit={this.onFormSubmit.bind(this)} type="submit"/>
        </Validation.components.Form>
        <p>{this.state.Name}</p>
      </section>
    )
  }
}
