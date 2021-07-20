import React, { PureComponent, createContext } from 'react'


//定义一个高阶组件
function withUser(WrapperComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrapperComponent {...props} {...user} />
          }
        }
      </UserContext.Consumer>
    )
  }
}



const UserContext = createContext({
  nikeName: "jinbin",
  level: -1,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.nickName}等级：${this.props.level} 地区：${this.props.region}`}</h2>
          
  }
}
class About extends PureComponent {
  render() {
    return <h2>About:{`昵称：${this.props.nickName}等级：${this.props.level} 地区：${this.props.region}`}</h2>
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickName: "jin", level: 999, region: "杭州" }}>
          <UserHome />
          <UserAbout />
        </UserContext.Provider>

      </div>
    )
  }
}
