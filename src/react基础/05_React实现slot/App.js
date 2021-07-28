import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar name="" title="" className="">
          <span>aaa</span>
          <span>bbb</span>
          <a href="/#">ccc</a>
        </NavBar>

        <NavBar2 leftSolt={<span>aaa</span>}
                 centerSolt={<span>bbb</span>}
                 rightSolt={<a href="/#">ccc</a>}
        />

      </div>
    )
  }
}
