import React, { PureComponent } from 'react'

function withAuth(WrapperComponent){
    const NewCpn =  props=>{
    const {isLogin} = props;
    if(isLogin){
      return <WrapperComponent {...props}/>
    }else{
      return <LoginPage/>
    }
  }
  NewCpn.displayName = "AuthCpn";
  return NewCpn;
}


//购物车组件
class CartPage extends PureComponent{
  render(){
    return <h2>CartPage</h2>
  }
}

//登录
class LoginPage extends PureComponent{
  render(){
    return <h2>LoginPage</h2>
  }
}

const AuthCartPage = withAuth(CartPage);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false}/>

      </div>
    )
  }
}
