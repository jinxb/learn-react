import React, { Component } from 'react'

class ChildCpn extends Component {
  render() {
    const { name, age, height } = this.props;
    return (
      <h2>子组件展示数据：{name + " " + age + " " + height}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="jin" age="18" height="1.81" />
        <ChildCpn name="jay" age="18" height="1.77" />
      </div>
    )
  }
}
