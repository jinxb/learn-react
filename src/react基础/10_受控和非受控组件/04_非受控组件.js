import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          {/* 非受控组件 */}
          <label htmlFor="username">
            <input 
             type="text"
             id="username" 
             onChange={e=>this.handleChange(e)}
             ref={this.usernameRef}
             />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.usernameRef.current.value);
    //单向数据流
  }
  handleChange(event){
  }
}
