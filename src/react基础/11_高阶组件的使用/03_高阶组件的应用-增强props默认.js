import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
  nikeName: "jinbin",
  level: -1,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user=>{
            return <h2>About:{`昵称：${user.nickName}等级：${user.level} 地区：${user.region}`}</h2>
          }
        }
      </UserContext.Consumer>
    )
  }
}
class About extends PureComponent {
  render() {
    return <h2>About:{`昵称：${this.props.nickName}等级：${this.props.level} 地区：${this.props.region}`}</h2>
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickName: "jin", level: 999, region: "杭州" }}>
          <Home />
          <About />
        </UserContext.Provider>

      </div>
    )
  }
}
