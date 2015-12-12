"use strict";

import React from 'react'
import {Router, Route} from 'react-router'

import Layout from './layout'
import Home from './pages/home'

module.exports = (
  <Route component={Layout}>
    <Route path="/" component={Home} />
  </Route>
);

