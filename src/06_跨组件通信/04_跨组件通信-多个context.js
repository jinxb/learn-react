import React, { Component } from 'react'

//创建context对象
const UserContext = React.createContext({
  nickname: "aa",
  level: -1
})

const ThemeContext = React.createContext({
  color: "red"
})


//函数式组件 Consumer
function ProfileHeade() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div style={{color:theme.color}}>
                      <h5>用户昵称：{value.nickname}</h5>
                      <h5>用户等级：{value.level}</h5>
                      <h5>颜色：{theme.color}</h5>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>

          )
        }
      }
    </UserContext.Consumer>
  )
}

function Profile() {
  return (
    <div>
      <ProfileHeade />
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
  constructor(props) {
    super(props);
    this.state = {
      nickname: "jinxb",
      level: 99
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color:"red"}}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
