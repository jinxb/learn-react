import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      valid:""
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            <input 
             type="text"
             id="username" 
             name="username"
             onChange={e=>this.handleChange(e)}
             value={this.state.username}
             />
          </label>
          <div>
          <label htmlFor="password">
            密码：
            <input 
             type="text"
             id="password" 
             name="password"
             onChange={e=>this.handleChange(e)}
             value={this.state.password}
             />
          </label>
          </div>
          <label htmlFor="valid">
            验证码：
            <input 
             type="text"
             id="valid" 
             name="valid"
             onChange={e=>this.handleChange(e)}
             value={this.state.valid}
             />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    const {username, password, valid} = this.state;
    console.log(username,password,valid);
  }
  handleChange(event){
    this.setState({
      //计算属性名
      [event.target.name]:event.target.value
    })
  }
}
