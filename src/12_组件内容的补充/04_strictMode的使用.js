import React, { PureComponent } from 'react'

//严格模式：
//1.识别不安全的生命周期  (componentWillMount等)
//2.使用过时的ref API
//3.检查意外的副作用 contructor会被调用两次
//4.使用废弃的findDomNode方法
//5.检测过时的context API

class Home extends PureComponent{
  render(){
    return <h2>Home</h2>
  }
}

class Profile extends PureComponent{
  render(){
    return <h2>Profile</h2>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
