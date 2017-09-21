import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, BrowserRouter, HashRouter, Route, Link, history } from 'react-router-dom'
// import { history } from 'react-router'
import Triune from './Triune'
import Home from './Home'
import classNames from 'classnames'
import PropTypes from 'prop-types'


render(
  (
    <HashRouter history={ HashRouter }>
      <Triune />
    </HashRouter>
  ),
  document.getElementById('app')
)
