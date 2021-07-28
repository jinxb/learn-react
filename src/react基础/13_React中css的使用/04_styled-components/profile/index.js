import React, { PureComponent } from 'react'
import styled from 'styled-components';


/**
 * 特点：
 *  1.props穿透
 *  2.attrs的使用
 *  3.传入state作为props属性
 *  4.继承
 *  5.设置主题
 */

const HYinput = styled.input.attrs({
  placeholder:"jinxb",
  bColor:"blue"
})`
  background-color: ${props=>props.bColor};
  color:${props=>props.color};
`
export default class Profile extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      color:"red"
    }
  }
  render() {
    return (
      <div>
        <h2>Profile标题</h2>
          <HYinput type="password" color={this.state.color}/>
          <ul>
            <li>设置组件1</li>
            <li>设置组件2</li>
            <li>设置组件3</li>
          </ul>
      </div>
    )
  }
}
