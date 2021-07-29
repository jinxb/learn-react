import React, { PureComponent } from 'react'

import axios from 'axios';

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    axios({
      url:"https://httpbin.org/get",
      params:{
        name:"why",
        age:18
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        {
          <h2>我是标题</h2>
        }
      </div>
    )
  }
}
