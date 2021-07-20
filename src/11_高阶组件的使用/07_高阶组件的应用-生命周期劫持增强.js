import React, { PureComponent } from 'react'


function withRenderTime(WrapperComponent) {
  return class extends PureComponent {
    //即将渲染获取一个时间 beginTime
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }
    //渲染完成再获取一个时间endTime
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrapperComponent.name}的渲染时间：${interval}`);
    }
    render(){
      return <WrapperComponent {...this.props}/>
    }
  }
}


class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}
class About extends PureComponent {
  render() {
    return <h2>About</h2>
  }
}

const HomeTime = withRenderTime(Home);
const AboutTime = withRenderTime(About);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HomeTime />
        <AboutTime />
      </div>
    )
  }
}
