import React, { PureComponent } from 'react'
import styled from 'styled-components';

const HomeWrapper = styled.div`
font-size:50px;
color:red;
.banner{
  background-color: #f0f;
}
`

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <h2>home标题</h2>
        <div className="banner">
          <span>轮播图</span>
        </div>
      </HomeWrapper>
    )
  }
}
