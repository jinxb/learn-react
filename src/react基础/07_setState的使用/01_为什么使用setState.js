import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}
