import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return (
      <div>
        我是cpn
      </div>
    )
  }
  componentWillUnmount() {
    console.log("调用了Cpn组件的componentWillUnmount");
  }
}


export default class App extends Component {
  constructor() {
    super();
    console.log("执行了组件的constructor");
    this.state = {
      counter: 0,
      isShow: true
    }
  }
  render() {
    console.log("执行了组件的render函数");

    return (
      <div>
        我是app组件
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <hr />
        <button onClick={e => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn />}
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidMount() {
    console.log("执行了组件的componentDidMount");
  }
  /**
   * componentDidUpdate(previProps,prevState,snashot)
   */
  componentDidUpdate() {
    console.log("执行了组件的componentDidUpdate");
  }
}
