"use strict";

import React from 'react'
import {Link} from 'react-router'

export class Nav {
  render() {
    return (
      <div id="nav" className="nav">
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
        </ul>
      </div>
    )
  }
}

