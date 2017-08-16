import React from 'react'
import { render } from 'react-dom'
import { Router, BrowserRouter, HashRouter, Route, Link, history } from 'react-router-dom'
// import { history } from 'react-router'
import Triune from './Triune'
import Home from './Home'

render(
  (
    <BrowserRouter history={ HashRouter }>
      <Triune />
    </BrowserRouter>
  ),
  document.getElementById('app')
)
