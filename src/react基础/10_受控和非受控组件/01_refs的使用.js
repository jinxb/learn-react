import React, { PureComponent,createRef } from 'react'


class Counter extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2> 

        <button onClick={e=>{this.increment()}}>计数+1</button>       
      </div>
    )
  }
  increment(){
    this.setState({
      counter:this.state.counter + 1
    })
  }
}


export default class App extends PureComponent {
  // 所有类组件对象都有一个refs属性
  constructor(props){
    super(props);
    this.titleRef = createRef();
    this.counterRef = createRef()
    this.titleEl = null;
  }
  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数</div>>hello react</h2> */}
        {/* 文本ref已弃用 */}
        <h2 ref="titleRef">Hello React</h2>
        {/* 目前react推荐的方式 */}
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={arg=>this.titleEl = arg}>Hello React</h2>

        <button onClick={e=>this.changeText()}>改变文本</button>
        <hr />

        <Counter ref={this.counterRef}/>
        <button onClick={e=>{this.appBtnClick()}}>App按钮</button>
      </div>
    )
  }
  changeText(){
    //1.使用方式一：字符串形式（不推荐，已弃用）
    this.refs.titleRef.innerHTML = "hello jinbin111";
    //2.使用方式二：对象方式
    this.titleRef.current.innerHTML = "hello jinbin222";
    //3.使用方式三：回调函数方式
    this.titleEl.innerHTML = "hello jinbin333";
  }
  appBtnClick(){
    console.log(this.counterRef.current);
    this.counterRef.current.increment();
  }
}
