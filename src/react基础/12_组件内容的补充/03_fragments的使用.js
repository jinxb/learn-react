import React, { Component,Fragment } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
  }
  render() {
    return (
      <Fragment>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+1</button>
      </Fragment>
    )
  }
  increment(){
    this.setState({
      counter:this.state.counter + 1
    })
  }
}
