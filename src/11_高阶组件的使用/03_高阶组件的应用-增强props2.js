import React, { PureComponent,createContext } from 'react'


//定义一个高阶组件
const UserContext = createContext({
  nikeName:"jinbin",
  level:-1,
  region:"中国"
})

class Home extends PureComponent{
  render(){
    return <h2>Home:{`昵称：${this.props.name}等级：${this.props.level} 地区：${this.props.region}`}</h2>
  }
}
class About extends PureComponent{
  render(){
    return <h2>About:{`昵称：${this.props.name}等级：${this.props.level} 地区：${this.props.region}`}</h2>
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value = {{nickName:"jin",level:999,region:"中国"}}>
          
        </UserContext.Provider>
        <Home />
        <About />

      </div>
    )
  }
}
