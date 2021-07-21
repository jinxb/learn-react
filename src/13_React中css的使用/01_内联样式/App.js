import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    const pStyle = {
      color:"orange",
      textDecoration:"underline"
    }
    return (
      <div>
        <h2 style={{fontSize:"10px",color:"red"}}>我是标题</h2>
        <p style={pStyle}>我是一段文字描述</p>
      </div>
    )
  }
}
