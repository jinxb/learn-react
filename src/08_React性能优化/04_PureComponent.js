import React, { PureComponent } from 'react'

//header
function Header() {
  console.log("Header render函数被调用");

  return <h2>我是Header组件</h2>
}


//main
function Banner() {
  console.log("Banner render函数被调用");

  return <h3>我是Banner组件</h3>
}
function ProductList() {
  console.log("ProductList render函数被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}
//PureComponent  内部进行了浅层比较  最后返回boolean值决定是否渲染
class Main extends PureComponent {
  render() {
    console.log("Main render函数被调用");
    return (
      <div>
        <Banner></Banner>
        <ProductList></ProductList>
      </div>
    )
  }
}



//footer
function Footer() {
  console.log("Footer render函数被调用");
  return <h2>我是Footer组件</h2>
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => { this.increment() }}>+1</button>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}