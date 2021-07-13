import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h5>当前计数：{this.state.counter}</h5>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log(this.state.counter);
  }
}
