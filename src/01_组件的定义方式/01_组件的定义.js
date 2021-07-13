import React from "react";
// import React,{ Component } from "react";
/**
 * 类组件
 */
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {

//     }
//   }
//   render(){
//     return (
//       <div>
//         <span>Change</span>
//         <h2>你好啊，React</h2>
//       </div>
//     )
//   }
// }

/**
 * 函数式组件的特点：
 * 1.没有this对象
 * 2.没有内部状态 -> hooks
 * 
 * @returns 
 */
function App(){
  return (
    <div>
        <span>Change</span>
        <h2>你好啊，React</h2>
      </div>
  )
}

export default App;