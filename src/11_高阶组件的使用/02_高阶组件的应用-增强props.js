import React, { PureComponent } from 'react'

//定义一个高阶组件
function enhanceRegionProps(WrapperComponent){
  return props => {
    return <WrapperComponent {...props} region="中国"/>
  }
}

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


const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name="jinxb" level={99}/>
        <EnhanceAbout name="jaychou" level={99}/>

      </div>
    )
  }
}
