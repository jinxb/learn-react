import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      fruits:"banana"
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          {/* input组件 */}
          {/* <label htmlFor="username">
            <input 
             type="text"
             id="username" 
             onChange={e=>this.handleChange(e)}
             value={this.state.username}
             />
          </label> */}

          {/* select组件 */}
          <select name="fruits" value={this.state.fruits} onChange={e=>this.handleChange(e)}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fruits);
    //单向数据流
  }
  handleChange(event){
    this.setState({
      fruits:event.target.value
    })
  }
}
