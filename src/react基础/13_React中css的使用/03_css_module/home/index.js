import React, { PureComponent } from 'react'

import './style.css'
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">home标题</h2>
        <div className="banner">
          <span>轮播图</span>
        </div>
      </div>
    )
  }
}
