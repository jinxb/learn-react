import React, { Component } from 'react'
// 属性展开Spread Attributes   ...props 

function ProfileHeade(props){
  return (
    <div>
      <h5>用户昵称：{props.nickname}</h5>
      <h5>用户等级：{props.level}</h5>
    </div>
  )
}

function Profile(props){
  return (
    <div>
      {/* <ProfileHeade nickname={props.nickname} level={props.level} /> */}
      <ProfileHeade {...props}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nickname:"jinxb",
      level:99
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}
