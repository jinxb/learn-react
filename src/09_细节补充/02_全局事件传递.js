import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'
const eventBus = new EventEmitter();
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

class Home extends PureComponent {
  componentDidMount(){
    eventBus.addListener("sayHello",(num,message)=>{
      console.log(num,message);
    })
  }

  componentWillUnmount(){
    eventBus.removeListener('sayHello')
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

class Profile extends PureComponent{
  render(){
    return(
      <div>
        Profile
        <button onClick={e=>{this.emitEvent()}}>点击了profile按钮</button>
      </div>
    )
  }
  emitEvent(){
    eventBus.emit('sayHello',123,"hello world")
  }
}
