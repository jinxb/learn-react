import React, { PureComponent } from 'react'

export default class APP extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      friends:[
        {name:"lilei",age:20},
        {name:"lihua",age:21},
        {name:"wanggang",age:23},
        {name:"jinbin",age:22},

      ]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.friends.map((item,index)=>{
              return <li key={item.name}>
                姓名：{item.name} 年龄：{item.age}
                <button onClick={e=>this.incrementAge(index)}>age+1</button>
                </li>
            })
          }
        </ul>
        <button onClick={e=>this.insertDate()}>添加数据</button>
      </div>
    )
  }
  insertDate(){
    const newData = {name:"tom",age:30};
    const newFriend = [...this.state.friends];
    newFriend.push(newData)
    this.setState({
      friends:newFriend
    })
  }
  incrementAge(index){
    let newFriend = [...this.state.friends];
    newFriend[index].age = newFriend[index].age+1;
    this.setState({
      friends:newFriend
    })
  }
}
