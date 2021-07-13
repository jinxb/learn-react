import React, { Component } from 'react'

class CounterBtn extends Component{

  render(){
    const {increment} = this.props;
    return <button onClick={increment}>+1</button>
  }
}

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
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+</button>
        <br/>
        <CounterBtn increment={e=>this.increment()} name="jin"></CounterBtn>
      </div>
    )
  }

  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
