import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movice:['盗梦空间','星际穿越']
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.movice.map(item=>{
            return <li key={item}>{item}</li>
          })}
        </ul>
        <button onClick={e=>this.addMovice()}>添加电影</button>
      </div>
    )
  }
  addMovice(){
    //diff算法
    this.setState({
      //keys的作用 优化  比较两个树节点
      movice:['大话西游',...this.state.movice]
    })
  }
}
