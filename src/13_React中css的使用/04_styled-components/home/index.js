import React, { PureComponent } from 'react'

import {
  HomeWrapper
} from './style'

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <h2>home标题</h2>
        <div className="banner">
          <span>轮播图1</span>
          <span className="active">轮播图2</span>
          <span>轮播图3</span>

        </div>
      </HomeWrapper>
    )
  }
}
