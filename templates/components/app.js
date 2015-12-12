
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { createHistory } from 'history'
import routes from './routes'

let history = createHistory();

render( <Router history={history}>{routes}</Router>, document.getElementById("app"));

